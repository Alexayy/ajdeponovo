
        function allowDrop(ev) {
            ev.preventDefault();
        }

        // Zove funkciju onDragStart i specifira sta ce se ragovati
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id); // postavlja tip podatka i vrednost
            // postoo cita "text", setovace cu text u item1.1"
        }

        // kada se dropuje, drop event se aktivira
        // zove se funkcija drop(ev)
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }