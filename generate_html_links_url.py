with open("README.md") as file:
    data = file.read()

in_section = False
in_bullet = False

for line in data.splitlines():
    if line.startswith("# "):
        print(f'        <h1 id="title">{line[2:]}</h1>')
    elif line.startswith("## "):
        if in_bullet:
            print("                </ul>")
            in_bullet = False
        if in_section:
            print("""
            </div>
        </div>""")
        in_section = True
        section_friendly_name = line[3:]
        section_class_name = section_friendly_name.lower().replace(" ", "_")
        print(f"""        <div class="section">
            <h2>{section_friendly_name}</h2>
            <button class="toggle-btn" onclick="toggleSection('{section_class_name}')">{section_friendly_name}</button>
            <div id="{section_class_name}" class="content">""")
    elif line.startswith("### "):
        if in_bullet:
            print("                </ul>")
            in_bullet = False
        print(f"            <h3>{line[4:]}</h3>")
    elif line.startswith("#### "):
        if in_bullet:
            print("                </ul>")
            in_bullet = False
        print(f"            <h4>{line[5:]}</h4>")
    elif line.startswith(" - "):
        if not in_bullet:
            print("                <ul>")
        in_bullet = True
        for splited_line in line.split("),"):
            splited_line += ")"
            link_name = splited_line.split("[", 1)[1].rsplit("]", 1)[0]
            link = splited_line.split("(")[1].split(")")[0]
        print(f'                    <li><a href="{link}">{link_name}</a></li>')
    elif line.strip():
        raise ValueError("Not empty line: " + line)