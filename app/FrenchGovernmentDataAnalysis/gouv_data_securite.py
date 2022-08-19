from matplotlib.pyplot import bar, show, title, gcf, xticks, subplots_adjust, get_current_fig_manager
from urllib.request import urlopen
from collections import Counter
from gzip import open as gzip
from csv import reader

class GzipEncoded:
    def __init__(self, file):
        self.file = gzip(file)
    def __iter__(self):
        self.file.read(3)       # read '\ufeff' -> 'ï»¿'
        next(self.file)         # first line -> classe,annee,Code.département,Code.région,Nom.de.la.région,unité.de.compte,millPOP,millLOG,faits,POP,LOG,tauxpourmille
        for line in self.file:
            yield line.decode()
            
class DecodeResponse:
    def __init__(self, file):
        self.file = file
    def __iter__(self):
        next(self.file)
        for line in self.file:
            yield line.decode()

departements_response = urlopen("https://www.insee.fr/fr/statistiques/fichier/6051727/departement_2022.csv")
departements = {code: name for code, region, cheflieu, _, f_name, name, name_ in reader(DecodeResponse(departements_response))}

response = urlopen("https://static.data.gouv.fr/resources/bases-communale-et-departementale-des-principaux-indicateurs-des-crimes-et-delits-enregistres-par-la-police-et-la-gendarmerie-nationales/20220609-151700/donnee-dep-corr.csv.gz")
file = GzipEncoded(response)
data = reader(file, delimiter=";")

by_annee = Counter()
by_region = Counter()
by_classe = Counter()
by_pourcent = Counter()
by_departement = Counter()
pourcent_divide = Counter()

for classe, annee, departement, region, region_name, unite, mPOP, mLOG, number, pop, log, forMille in data:
    by_region[region_name] += float(number)
    by_classe[classe] += float(number)
    by_departement[departement + " - " + departements[departement]] += float(number)
    by_pourcent[departement + " - " + departements[departement]] += float(forMille.replace(",", "."))
    pourcent_divide[departement + " - " + departements[departement]] += 1
    by_annee[annee] += float(number)

# print(by_annee.most_common())

for departement, value in pourcent_divide.items():
    by_pourcent[departement] = by_pourcent[departement] / pourcent_divide[departement]

for name, (counter, text_size, params) in {"1000 habitants / departement": (by_pourcent, 5, {"left":0.03,"bottom":0.11,"right":1,"top":0.93}), "region": (by_region, 10, {"left":0.05,"bottom":0.18,"right":0.98,"top":0.94}), "classe": (by_classe, 10, {"left":0.13,"bottom":0.28,"right":0.97,"top":0.93}), "departement": (by_departement, 5, {"left":0.03,"bottom":0.11,"right":1,"top":0.93,"wspace":0.2,"hspace":0.2})}.items():
    keys = []
    values = []
    for key, value in counter.most_common():
        values.append(value)
        keys.append(key)
    bar(keys, values)
    gcf().autofmt_xdate()
    xticks(fontsize=text_size)
    subplots_adjust(**params)
    get_current_fig_manager().window.state('zoomed')
    title("Crime et délit par " + name)
    show()