var res = {'data':'HTTP/1.1 200 OK\x0aDate: Mon, 27 Sep 2021 17:56:18 GMT\x0aServer: WebScripts 1.4.13\x0aContent-Type: text/javascript; charset=utf-8\x0aStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\x0aContent-Security-Policy: default-src \x27self\x27; form-action \x27none\x27; frame-ancestors \x27none\x27\x0aX-Frame-Options: deny\x0aX-XSS-Protection: 1; mode=block\x0aX-Content-Type-Options: nosniff\x0aReferrer-Policy: origin-when-cross-origin\x0aCache-Control: no-store\x0aPragma: no-store\x0aClear-Site-Data: *\x0aFeature-Policy: payment \x27none\x27; geolocation \x27none\x27; microphone \x27none\x27; camera \x27none\x27\x0aPermissions-Policy: microphone=(),camera=(),payment=(),geolocation=()\x0aCross-Origin-Embedder-Policy: require-corp\x0aCross-Origin-Opener-Policy: same-origin\x0aCross-Origin-Resource-Policy: same-origin\x0aX-Server: WebScripts\x0aContent-Length: 21573\x0a\x0a/*\x0d\x0a\x0d\x0a\x09\x09Scripts for script.html\x0d\x0a\x09\x09Copyright (C) 2021\x09Maurice Lambert\x0d\x0a\x0d\x0a\x09\x09This program is free software: you can redistribute it and/or modify\x0d\x0a\x09\x09it under the terms of the GNU General Public License as published by\x0d\x0a\x09\x09the Free Software Foundation, either version 3 of the License, or\x0d\x0a\x09\x09(at your option) any later version.\x0d\x0a\x0d\x0a\x09\x09This program is distributed in the hope that it will be useful,\x0d\x0a\x09\x09but WITHOUT ANY WARRANTY; without even the implied warranty of\x0d\x0a\x09\x09MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\x09See the\x0d\x0a\x09\x09GNU General Public License for more details.\x0d\x0a\x0d\x0a\x09\x09You should have received a copy of the GNU General Public License\x0d\x0a\x09\x09along with this program.\x09If not, see \x3chttps://www.gnu.org/licenses/\x3e.\x0d\x0a\x0d\x0a*/\x0d\x0a\x0d\x0alet script_name;\x0d\x0alet script;\x0d\x0alet download_extension = \x22.txt\x22;\x0d\x0alet download_text = \x22\x22;\x0d\x0alet download_type = \x22plain\x22\x0d\x0alet download_separator = \x22\x5cn\x22;\x0d\x0alet execution_number = 0;\x0d\x0alet progress = true;\x0d\x0alet is_running = false;\x0d\x0a\x0d\x0afunction build_script_interface(scripts) {\x0d\x0a\x0d\x0a    function add_description(script) {\x0d\x0a        document.getElementById(\x22script_description\x22).innerText = script\x0d\x0a            .description;\x0d\x0a    }\x0d\x0a\x0d\x0a    function add_arguments(script) {\x0d\x0a\x0d\x0a        function set_custom_attributes(argument, config) {\x0d\x0a            attributes = config.javascript_attributs;\x0d\x0a\x0d\x0a            for (attribute in attributes) {\x0d\x0a                argument.setAttribute(attribute, attributes[attribute]);\x0d\x0a            }\x0d\x0a        }\x0d\x0a\x0d\x0a        function config_advanced_arguments(advanced_container,\x0d\x0a            advanced_arguments) {\x0d\x0a            if (!advanced_container.getElementsByClassName(\x22row\x22).length) {\x0d\x0a                advanced_container.style.display = \x22none\x22;\x0d\x0a            } else {\x0d\x0a                let button = document.getElementById(\x22print_advanced\x22);\x0d\x0a                button.onclick = () =\x3e {\x0d\x0a                    if (advanced_arguments.style.display === \x22none\x22) {\x0d\x0a                        advanced_arguments.style.display = \x22block\x22;\x0d\x0a                        button.innerText = \x22Hide advanced arguments\x22;\x0d\x0a                    } else {\x0d\x0a                        advanced_arguments.style.display = \x22none\x22;\x0d\x0a                        button.innerText = \x22Show advanced arguments\x22;\x0d\x0a                    }\x0d\x0a                };\x0d\x0a            }\x0d\x0a        }\x0d\x0a\x0d\x0a        function add_div_row(label, paragraph, input_wrapper) {\x0d\x0a            let div = document.createElement(\x22div\x22);\x0d\x0a            div.classList.add(\x22row\x22);\x0d\x0a            div.appendChild(label);\x0d\x0a            div.appendChild(paragraph);\x0d\x0a            div.appendChild(input_wrapper);\x0d\x0a            return div;\x0d\x0a        }\x0d\x0a\x0d\x0a        function add_paragraph() {\x0d\x0a            let paragraph = document.createElement(\x22p\x22);\x0d\x0a            paragraph.classList.add(\x22inline\x22);\x0d\x0a            paragraph.classList.add(\x22description\x22);\x0d\x0a            paragraph.classList.add(\x22script_presentation\x22);\x0d\x0a            return paragraph;\x0d\x0a        }\x0d\x0a\x0d\x0a        function add_label(argument) {\x0d\x0a            let label = document.createElement(\x22label\x22);\x0d\x0a            label.htmlFor = argument.name;\x0d\x0a            label.innerText = argument.name + \x22 :\x22;\x0d\x0a            label.classList.add(\x22inline\x22);\x0d\x0a            label.classList.add(\x22script_presentation\x22);\x0d\x0a            return label;\x0d\x0a        }\x0d\x0a\x0d\x0a        function add_argument_select(argument) {\x0d\x0a            let option;\x0d\x0a            let select = document.createElement(\x22select\x22);\x0d\x0a            select.id = argument.name;\x0d\x0a            select.name = argument.name;\x0d\x0a\x0d\x0a            if (argument.list) {\x0d\x0a                select.multiple = true;\x0d\x0a            }\x0d\x0a\x0d\x0a            if (argument.default_value !== undefined && argument\x0d\x0a                .default_value !== null) {\x0d\x0a                select.value = argument.default_value;\x0d\x0a            }\x0d\x0a\x0d\x0a            for (let i = 0; i \x3c argument.predefined_values.length; ++i) {\x0d\x0a                option = document.createElement(\x22option\x22);\x0d\x0a                option.innerText = argument.predefined_values[i];\x0d\x0a                option.value = argument.predefined_values[i];\x0d\x0a\x0d\x0a                select.appendChild(option);\x0d\x0a            }\x0d\x0a\x0d\x0a            return select;\x0d\x0a        }\x0d\x0a\x0d\x0a        function get_input(arg) {\x0d\x0a            let input = document.createElement(\x22input\x22);\x0d\x0a            input.id = arg.name;\x0d\x0a            input.name = arg.name;\x0d\x0a            input.type = arg.html_type;\x0d\x0a\x0d\x0a            if (arg.default_value !== undefined && arg.default_value !== null) {\x0d\x0a                input.value = arg.default_value\x0d\x0a            }\x0d\x0a            if (arg.example !== undefined && arg.example !== null) {\x0d\x0a                input.placeholder = arg.example;\x0d\x0a            }\x0d\x0a            if (arg.list) {\x0d\x0a                input.id = input.name + document.getElementsByName(\x0d\x0a                    input.name\x0d\x0a                ).length;\x0d\x0a                input.onchange = input_list;\x0d\x0a            }\x0d\x0a\x0d\x0a            return input;\x0d\x0a        }\x0d\x0a\x0d\x0a        function input_list(event) {\x0d\x0a            let source = event.target || event.srcElement;\x0d\x0a\x0d\x0a            let next_id = source.id.substring(0, source.id.length - 1) + (\x0d\x0a                parseInt(source.id[source.id.length - 1]) + 1);\x0d\x0a            let next = document.getElementById(next_id);\x0d\x0a\x0d\x0a            if (source.value === \x22\x22 && (next !== null || next.value === \x22\x22)) {\x0d\x0a                next.remove();\x0d\x0a            } else if (source.value !== \x22\x22 && next === null) {\x0d\x0a                new_element = source.cloneNode()\x0d\x0a                new_element.id = source.name + document.getElementsByName(source\x0d\x0a                    .name).length;\x0d\x0a                source.parentNode.appendChild(new_element);\x0d\x0a                new_element.onchange = input_list;\x0d\x0a                new_element.value = \x22\x22;\x0d\x0a            }\x0d\x0a        }\x0d\x0a\x0d\x0a        function url_default_values() {\x0d\x0a            let event;\x0d\x0a            let element;\x0d\x0a            let query = location.search;\x0d\x0a            query = query.substr(1);\x0d\x0a            query.split(\x22&\x22).forEach(function(part) {\x0d\x0a                let item = part.split(\x22=\x22);\x0d\x0a\x0d\x0a                element = document.getElementById(decodeURIComponent(\x0d\x0a                    item[0]));\x0d\x0a                if (element) {\x0d\x0a                    element.value = decodeURIComponent(item[1]);\x0d\x0a                    event = new Event(\x27change\x27);\x0d\x0a                    element.dispatchEvent(event);\x0d\x0a                }\x0d\x0a            });\x0d\x0a        }\x0d\x0a\x0d\x0a        let arg;\x0d\x0a        let argument;\x0d\x0a        let div;\x0d\x0a        let label;\x0d\x0a        let paragraph;\x0d\x0a\x0d\x0a        let advanced_container = document.getElementById(\x22advanced_container\x22);\x0d\x0a        let advanced_arguments = document.getElementById(\x22advanced_arguments\x22);\x0d\x0a        let script_interface = document.getElementById(\x22script_interface\x22);\x0d\x0a        let input_wrapper;\x0d\x0a\x0d\x0a        for (let i = 0; i \x3c script.args.length; ++i) {\x0d\x0a            arg = script.args[i];\x0d\x0a            input_wrapper = document.createElement(\x22div\x22);\x0d\x0a            input_wrapper.classList.add(\x22input_wrapper\x22);\x0d\x0a\x0d\x0a            if (arg.predefined_values !== undefined && arg.predefined_values !==\x0d\x0a                null) {\x0d\x0a                argument = add_argument_select(arg);\x0d\x0a            } else {\x0d\x0a                argument = get_input(arg);\x0d\x0a            }\x0d\x0a            set_custom_attributes(argument, arg);\x0d\x0a\x0d\x0a            input_wrapper.appendChild(argument);\x0d\x0a            label = add_label(argument);\x0d\x0a            paragraph = add_paragraph();\x0d\x0a\x0d\x0a            if (arg.description !== undefined && arg.description !== null) {\x0d\x0a                paragraph.innerText = arg.description;\x0d\x0a            }\x0d\x0a\x0d\x0a            input_wrapper.classList.add(\x22inline\x22);\x0d\x0a            div = add_div_row(label, paragraph, input_wrapper);\x0d\x0a\x0d\x0a            if (arg.is_advanced) {\x0d\x0a                advanced_arguments.appendChild(div);\x0d\x0a            } else {\x0d\x0a                script_interface.insertBefore(div, advanced_container);\x0d\x0a            }\x0d\x0a        }\x0d\x0a\x0d\x0a        add_button();\x0d\x0a        url_default_values();\x0d\x0a        config_advanced_arguments(advanced_container, advanced_arguments);\x0d\x0a    }\x0d\x0a\x0d\x0a    script = scripts[script_name];\x0d\x0a\x0d\x0a    add_description(script);\x0d\x0a    add_arguments(script);\x0d\x0a}\x0d\x0a\x0d\x0afunction start_script_execution(event) {\x0d\x0a\x0d\x0a    function get_arguments() {\x0d\x0a\x0d\x0a        let counter = 0;\x0d\x0a        let values = Array.from(document.getElementsByTagName(\x27input\x27)).concat(\x0d\x0a            Array.from(document.getElementsByTagName(\x27select\x27)));\x0d\x0a        let script_interface = document.getElementById(\x27script_interface\x27);\x0d\x0a        let arguments_ = {};\x0d\x0a\x0d\x0a        add_arguments(values, counter, arguments_);\x0d\x0a    }\x0d\x0a\x0d\x0a    get_arguments();\x0d\x0a}\x0d\x0a\x0d\x0afunction sort_arguments(arguments_) {\x0d\x0a    let send_object = {};\x0d\x0a    let sort = [];\x0d\x0a\x0d\x0a    for (argument in arguments_) {\x0d\x0a        sort.push([argument, arguments_[argument][\x22position\x22]]);\x0d\x0a    }\x0d\x0a\x0d\x0a    sort.sort(function(a, b) {\x0d\x0a        return a[1] - b[1];\x0d\x0a    });\x0d\x0a\x0d\x0a    for (argument in sort) {\x0d\x0a        argument = sort[argument][0];\x0d\x0a        send_object[argument] = {};\x0d\x0a        send_object[argument][\x22value\x22] = arguments_[argument][\x22value\x22];\x0d\x0a        send_object[argument][\x22input\x22] = arguments_[argument][\x22input\x22];\x0d\x0a    }\x0d\x0a\x0d\x0a    return send_object;\x0d\x0a}\x0d\x0a\x0d\x0afunction add_value_for_request(arguments_, script_interface, id, name, value,\x0d\x0a    values, counter) {\x0d\x0a    if (arguments_[name] !== undefined) {\x0d\x0a        if (!Array.isArray(arguments_[name][\x22value\x22])) {\x0d\x0a            arguments_[name][\x22value\x22] = [arguments_[name][\x22value\x22]];\x0d\x0a        }\x0d\x0a\x0d\x0a        if (value) {\x0d\x0a            arguments_[name][\x22value\x22].push(value);\x0d\x0a        }\x0d\x0a    } else {\x0d\x0a        arguments_[name] = {\x0d\x0a            \x22value\x22: value,\x0d\x0a            \x22position\x22: script_interface.innerHTML.indexOf(`id=\x22${id}\x22`)\x0d\x0a        };\x0d\x0a\x0d\x0a        let arg;\x0d\x0a        for (let i = 0; i \x3c script.args.length; ++i) {\x0d\x0a            arg = script.args[i];\x0d\x0a\x0d\x0a            if (arg.name !== name) {\x0d\x0a                continue;\x0d\x0a            }\x0d\x0a\x0d\x0a            if (arg.input === true) {\x0d\x0a                arguments_[name][\x22input\x22] = true;\x0d\x0a                break;\x0d\x0a            } else {\x0d\x0a                arguments_[name][\x22input\x22] = false;\x0d\x0a                break;\x0d\x0a            }\x0d\x0a        }\x0d\x0a    }\x0d\x0a\x0d\x0a    add_arguments(values, counter, arguments_);\x0d\x0a}\x0d\x0a\x0d\x0afunction add_arguments(values, counter, arguments_) {\x0d\x0a\x0d\x0a    function make_json_request(arguments_) {\x0d\x0a        let csrf = document.getElementById(\x22csrf_token\x22);\x0d\x0a        send_request(JSON.stringify({\x0d\x0a            \x22csrf_token\x22: csrf.value,\x0d\x0a            \x22arguments\x22: arguments_,\x0d\x0a        }));\x0d\x0a    }\x0d\x0a\x0d\x0a    if (counter \x3c values.length) {\x0d\x0a        let value = values[counter];\x0d\x0a        counter++;\x0d\x0a        window[`add_${value.tagName}_argument`](value, values, counter,\x0d\x0a            arguments_);\x0d\x0a    } else {\x0d\x0a        arguments_ = sort_arguments(arguments_);\x0d\x0a        make_json_request(arguments_);\x0d\x0a        return;\x0d\x0a    }\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0afunction add_INPUT_argument(input, values, counter, arguments_) {\x0d\x0a\x0d\x0a    if (input.type === \x22submit\x22 || input.name === \x22csrf_token\x22) {\x0d\x0a        add_arguments(values, counter, arguments_);\x0d\x0a        return;\x0d\x0a    }\x0d\x0a\x0d\x0a    if (input.type === \x22checkbox\x22) {\x0d\x0a        add_value_for_request(\x0d\x0a            arguments_,\x0d\x0a            script_interface,\x0d\x0a            input.id,\x0d\x0a            input.name,\x0d\x0a            input.checked,\x0d\x0a            values,\x0d\x0a            counter,\x0d\x0a        );\x0d\x0a    } else if (input.type === \x22file\x22) {\x0d\x0a        let reader = new FileReader();\x0d\x0a\x0d\x0a        reader.onload = (a) =\x3e {\x0d\x0a            add_value_for_request(\x0d\x0a                arguments_,\x0d\x0a                script_interface,\x0d\x0a                input.id,\x0d\x0a                input.name,\x0d\x0a                a.target.result,\x0d\x0a                values,\x0d\x0a                counter,\x0d\x0a            );\x0d\x0a        };\x0d\x0a\x0d\x0a        if (input.files.length) {\x0d\x0a            reader.readAsBinaryString(input.files[0]);\x0d\x0a        } else {\x0d\x0a            add_arguments(values, counter, arguments_);\x0d\x0a        }\x0d\x0a    } else {\x0d\x0a        add_value_for_request(\x0d\x0a            arguments_,\x0d\x0a            script_interface,\x0d\x0a            input.id,\x0d\x0a            input.name,\x0d\x0a            input.value,\x0d\x0a            values,\x0d\x0a            counter,\x0d\x0a        );\x0d\x0a    }\x0d\x0a}\x0d\x0a\x0d\x0afunction add_SELECT_argument(select, values, counter, arguments_) {\x0d\x0a\x0d\x0a    for (let l = 0; l \x3c select.options.length; ++l) {\x0d\x0a        option = select.options[l];\x0d\x0a\x0d\x0a        if (option.selected) {\x0d\x0a            add_value_for_request(\x0d\x0a                arguments_,\x0d\x0a                script_interface,\x0d\x0a                select.id,\x0d\x0a                select.name,\x0d\x0a                option.value,\x0d\x0a                values,\x0d\x0a                counter,\x0d\x0a            );\x0d\x0a        }\x0d\x0a    }\x0d\x0a\x0d\x0a    return arguments_;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0afunction send_request(json) {\x0d\x0a    let start;\x0d\x0a    let end;\x0d\x0a\x0d\x0a    let xhttp = new XMLHttpRequest();\x0d\x0a    xhttp.onreadystatechange = () =\x3e {\x0d\x0a        if (xhttp.readyState === 4 && xhttp.status === 200) {\x0d\x0a            end = Date.now();\x0d\x0a            let response_object = JSON.parse(xhttp.responseText);\x0d\x0a\x0d\x0a            document.getElementById(\x22csrf_token\x22).value = response_object\x0d\x0a                .csrf;\x0d\x0a\x0d\x0a            diff_seconds = Math.round((end.valueOf() - start.valueOf()) /\x0d\x0a                1000);\x0d\x0a            minutes = Math.round(diff_seconds / 60);\x0d\x0a            seconds = diff_seconds - minutes * 60;\x0d\x0a\x0d\x0a            if (minutes \x3c 10) {\x0d\x0a                minutes = `0${minutes}`;\x0d\x0a            }\x0d\x0a            if (seconds \x3c 10) {\x0d\x0a                seconds = `0${seconds}`;\x0d\x0a            }\x0d\x0a\x0d\x0a            build_output_interface(\x0d\x0a                response_object,\x0d\x0a                true,\x0d\x0a                `${minutes}:${seconds}`\x0d\x0a            );\x0d\x0a        } else if (xhttp.readyState === 4 && xhttp.status === 302 &&\x0d\x0a            script_name === \x22/auth/\x22) {\x0d\x0a\x0d\x0a            if (document.referrer && document.referrer.startsWith(window.location.origin) && !document.referrer.endsWith(\x22/web/auth/\x22)) {\x0d\x0a                window.location = document.referrer;\x0d\x0a            } else {\x0d\x0a                window.location = new URL(\x22/web/\x22, window.location);\x0d\x0a            }\x0d\x0a            \x0d\x0a        } else if (xhttp.readyState === 4 && xhttp.status === 500) {\x0d\x0a            document.getElementById(\x22bar\x22).innerHTML =\x0d\x0a                `ERROR 500: Internal Server Error. \x5cnYou can report a bug \x3ca href=\x22/error_pages/Report/new/${xhttp.status}\x22\x3eon the local report page\x3c/a\x3e.`;\x0d\x0a        } else if (xhttp.readyState === 4 && xhttp.status === 403) {\x0d\x0a            document.getElementById(\x22bar\x22).innerHTML =\x0d\x0a                `ERROR 403: Forbidden. (Refresh the page or re-authenticate please). \x5cnYou can \x3ca href=\x22/error_pages/Report/new/${xhttp.status}\x22\x3erequest access to the administrator\x3c/a\x3e.`;\x0d\x0a        } else if (xhttp.readyState === 4) {\x0d\x0a            document.getElementById(\x22bar\x22).innerHTML =\x0d\x0a                `HTTP ERROR ${xhttp.status}. \x5cnYou can report a bug \x3ca href=\x22/error_pages/Report/new/${xhttp.status}\x22\x3eon the local report page\x3c/a\x3e.`;\x0d\x0a        }\x0d\x0a\x0d\x0a        is_running = false;\x0d\x0a    }\x0d\x0a\x0d\x0a    let url;\x0d\x0a    if (script_name[0] === \x22/\x22) {\x0d\x0a        url = script_name;\x0d\x0a    } else {\x0d\x0a        url = \x22/api/scripts/\x22 + script_name;\x0d\x0a    }\x0d\x0a\x0d\x0a    xhttp.open(\x22POST\x22, url, true);\x0d\x0a    xhttp.setRequestHeader(\x27Content-Type\x27, \x27application/json\x27);\x0d\x0a    xhttp.send(json);\x0d\x0a    start = Date.now();\x0d\x0a\x0d\x0a    is_running = true;\x0d\x0a    progress_bar();\x0d\x0a}\x0d\x0a\x0d\x0afunction build_output_interface(output, add_history_ = true, time = null) {\x0d\x0a\x0d\x0a    function build_code(output, time) {\x0d\x0a        let code = document.createElement(\x22code\x22);\x0d\x0a        code.id = \x22code\x22;\x0d\x0a        code.classList.add(\x22code\x22);\x0d\x0a        code.innerText =\x0d\x0a            `\x3e\x3e\x3e ${script_name}\x5ctExitCode: ${output.code}\x5ctError: ${output.error}`;\x0d\x0a\x0d\x0a        if (time) {\x0d\x0a            code.innerText += `\x5ctExecutionTime: ${time}`;\x0d\x0a        }\x0d\x0a        return code;\x0d\x0a    }\x0d\x0a\x0d\x0a    function build_new_output(code) {\x0d\x0a        let new_output = document.createElement(\x22div\x22);\x0d\x0a        let console_ = document.createElement(\x22pre\x22);\x0d\x0a\x0d\x0a        console_.id = \x22console\x22;\x0d\x0a        console_.classList.add(\x22console\x22);\x0d\x0a\x0d\x0a        console_.appendChild(code);\x0d\x0a        new_output.appendChild(console_);\x0d\x0a\x0d\x0a        return new_output;\x0d\x0a    }\x0d\x0a\x0d\x0a    const unescape = str =\x3e str.replace(/&amp;/g , \x27&\x27).replace(/&lt;/g  , \x27\x3c\x27).replace(/&gt;/g  , \x27\x3e\x27).replace(/&#0*39;/g , \x22\x27\x22).replace(/&quot;/g, \x27\x22\x27);\x0d\x0a    let console_div = document.getElementById(\x22script_outputs\x22);\x0d\x0a    let content_type = output[\x22Content-Type\x22];\x0d\x0a    let stderr_content_type;\x0d\x0a    let text = \x22\x5cn\x22;\x0d\x0a    let html = \x22\x22;\x0d\x0a\x0d\x0a    if (output.hasOwnProperty(\x22Stderr-Content-Type\x22)) {\x0d\x0a        stderr_content_type = output[\x22Stderr-Content-Type\x22];\x0d\x0a    } else {\x0d\x0a        stderr_content_type = \x22text/plain\x22;\x0d\x0a    }\x0d\x0a\x0d\x0a    let code = build_code(output, time);\x0d\x0a    let new_output = build_new_output(code);\x0d\x0a\x0d\x0a    if (add_history_) {\x0d\x0a        add_history(\x0d\x0a            output.stdout,\x0d\x0a            output.stderr,\x0d\x0a            output.code,\x0d\x0a            output.error,\x0d\x0a            content_type,\x0d\x0a            stderr_content_type\x0d\x0a        );\x0d\x0a    }\x0d\x0a\x0d\x0a    if (stderr_content_type.includes(\x22text/html\x22)) {\x0d\x0a        html += output.stderr;\x0d\x0a    } else {\x0d\x0a        text += output.stderr;\x0d\x0a    }\x0d\x0a\x0d\x0a    if (content_type.includes(\x22text/html\x22)) {\x0d\x0a        download_extension = \x22.html\x22;\x0d\x0a        download_separator = \x22\x5cn\x3cbr\x3e\x5cn\x22;\x0d\x0a        download_type = \x22html\x22;\x0d\x0a        html = output.stdout + html;\x0d\x0a    } else {\x0d\x0a        download_extension = \x22.txt\x22;\x0d\x0a        download_separator = \x22\x5cn\x22;\x0d\x0a        download_type = \x22plain\x22;\x0d\x0a        text = `\x5cn${output.stdout}${text}`;\x0d\x0a    }\x0d\x0a\x0d\x0a    code.innerText += unescape(text);\x0d\x0a    new_output.innerHTML += html;\x0d\x0a\x0d\x0a    console_div.appendChild(new_output);\x0d\x0a    download_text += `${output.stdout}${output.stderr}${download_separator}`;\x0d\x0a\x0d\x0a    if (localStorage.getItem(\x27theme\x27) === \x22light\x22) {\x0d\x0a        light_mode(class_name = \x27light\x27, element = new_output);\x0d\x0a    } else if (localStorage.getItem(\x27theme\x27) === null) {\x0d\x0a        light_mode(class_name = \x27default_theme\x27, element = new_output);\x0d\x0a    }\x0d\x0a}\x0d\x0a\x0d\x0afunction add_history(stdout, stderr, code, error, content_type, stderr_content_type) {\x0d\x0a    let button = document.createElement(\x22button\x22);\x0d\x0a    button.onclick = build_output_interface.bind(\x0d\x0a        button, {\x0d\x0a            \x27stdout\x27: stdout,\x0d\x0a            \x27stderr\x27: stderr,\x0d\x0a            \x27code\x27: code,\x0d\x0a            \x27error\x27: error,\x0d\x0a            \x27Content-Type\x27: content_type,\x0d\x0a            \x27Stderr-Content-Type\x27: stderr_content_type,\x0d\x0a        },\x0d\x0a        add_history_ = false\x0d\x0a    );\x0d\x0a    button.innerText = execution_number;\x0d\x0a    execution_number++;\x0d\x0a    document.getElementById(\x22webscripts_border_right\x22).appendChild(button);\x0d\x0a\x0d\x0a    if (localStorage.getItem(\x27theme\x27) === \x22light\x22) {\x0d\x0a        button.classList.toggle(\x22light\x22);\x0d\x0a    } else if (localStorage.getItem(\x27theme\x27) === null) {\x0d\x0a        button.classList.toggle(\x22default_theme\x22);\x0d\x0a    }\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a\x0d\x0afunction clear_console() {\x0d\x0a    document.getElementById(\x22script_outputs\x22).innerText = \x22\x22;\x0d\x0a    download_text = \x22\x22;\x0d\x0a}\x0d\x0a\x0d\x0afunction clear_history() {\x0d\x0a    execution_number = 0;\x0d\x0a    document.getElementById(\x22webscripts_border_right\x22).innerText = \x22\x22;\x0d\x0a}\x0d\x0a\x0d\x0afunction index_page() {\x0d\x0a    window.location = new URL(\x22/web/\x22, window.location);\x0d\x0a}\x0d\x0a\x0d\x0afunction download() {\x0d\x0a    let download_link = document.createElement(\x27a\x27);\x0d\x0a    download_link.setAttribute(\x27href\x27,\x0d\x0a        `data:text/${download_type};charset=utf-8,` + encodeURIComponent(\x0d\x0a            download_text));\x0d\x0a    download_link.setAttribute(\x27download\x27, `result_${script_name}` +\x0d\x0a        download_extension);\x0d\x0a\x0d\x0a    document.body.appendChild(download_link);\x0d\x0a    download_link.click();\x0d\x0a    document.body.removeChild(download_link);\x0d\x0a}\x0d\x0a\x0d\x0afunction add_buttons() {\x0d\x0a    let border_left = document.getElementById(\x22webscripts_border_left\x22);\x0d\x0a\x0d\x0a    let index_button = document.createElement(\x22button\x22);\x0d\x0a    let console_button = document.createElement(\x22button\x22);\x0d\x0a    let history_button = document.createElement(\x22button\x22);\x0d\x0a    let download_button = document.createElement(\x22button\x22);\x0d\x0a\x0d\x0a    index_button.innerText = \x22Index\x22;\x0d\x0a    console_button.innerText = \x22Clear outputs\x22;\x0d\x0a    history_button.innerText = \x22Clear history\x22;\x0d\x0a    download_button.innerText = \x22Download\x22;\x0d\x0a\x0d\x0a    index_button.onclick = index_page;\x0d\x0a    console_button.onclick = clear_console;\x0d\x0a    history_button.onclick = clear_history;\x0d\x0a    download_button.onclick = download;\x0d\x0a\x0d\x0a    index_button.style.marginBottom = \x225%\x22;\x0d\x0a    console_button.style.marginBottom = \x225%\x22;\x0d\x0a    history_button.style.marginBottom = \x225%\x22;\x0d\x0a    download_button.style.marginBottom = \x225%\x22;\x0d\x0a\x0d\x0a    index_button.style.marginTop = \x225%\x22;\x0d\x0a    console_button.style.marginTop = \x225%\x22;\x0d\x0a    history_button.style.marginTop = \x225%\x22;\x0d\x0a    download_button.style.marginTop = \x225%\x22;\x0d\x0a\x0d\x0a    border_left.appendChild(index_button);\x0d\x0a    border_left.appendChild(console_button);\x0d\x0a    border_left.appendChild(history_button);\x0d\x0a    border_left.appendChild(download_button);\x0d\x0a}\x0d\x0a\x0d\x0afunction progress_bar() {\x0d\x0a    if (progress) {\x0d\x0a        progress = false;\x0d\x0a\x0d\x0a        function running() {\x0d\x0a            if (width \x3e= 100) {\x0d\x0a                clearInterval(interval);\x0d\x0a                progress = true;\x0d\x0a\x0d\x0a                if (is_running) {\x0d\x0a                    progress_bar();\x0d\x0a                } else {\x0d\x0a                    bar.style.textAlign = \x22center\x22;\x0d\x0a\x0d\x0a                    if (bar.innerText == \x22Script is running...\x22) {\x0d\x0a                        bar.innerText = \x22Completed.\x22;\x0d\x0a                    }\x0d\x0a                }\x0d\x0a            } else {\x0d\x0a                width++;\x0d\x0a                bar.style.width = width + \x22%\x22;\x0d\x0a            }\x0d\x0a        }\x0d\x0a\x0d\x0a        let bar = document.getElementById(\x22bar\x22);\x0d\x0a        let width = 1;\x0d\x0a        bar.innerText = \x22Script is running...\x22;\x0d\x0a        bar.style.textAlign = \x22left\x22;\x0d\x0a        bar.style.padding = \x221%\x22;\x0d\x0a        let interval = setInterval(running, 10);\x0d\x0a    }\x0d\x0a}'}