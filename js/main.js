/**
 *  TODO LIST
 * 
 *  - Usiamo i template in html e il clone per separare 
 *    la parte logica (JS) dalla parte di markup (HTML)
 * 
 *  - Funzionalità: mostrare, aggiungere 
 *    e eliminare elementi dalla lista
 */

$(document).ready(function () {
    
    var toDo = [
        'Fare quello',
        'Fare questo',
        'Cambiare questo',
        'Cambiare quello'
    ];

    // Refs
    var list = $('.todo-list');
    var newElement = $('.add-element');
    
    for (var i = 0; i < toDo.length; i++) {
        var elementToDo = $('.template li').clone();
    
        // Aggiungere testo al clone
        elementToDo.prepend(toDo[i]);
    
        // Aggiungere alla lista
        list.append(elementToDo);
    }
        
    // Aggiungere un nuovo elememto alla lista
    newElement.keyup(function (e) { 
        // console.log(e.which);

        if (e.which == 13) {
            var text = newElement.val().trim();

            if (text !== '') {
                var newElementToDo = $('.template li').clone();

                newElementToDo.prepend(text);

                list.append(newElementToDo);

                
                // Pulizia Input
                newElement.val('');
            }
        }
    });

        // Eliminare un elemento dalla lista
        $('body').on('click', '.todo-list li i', function () {
            $(this).parent().remove();
        });    

        // Delete line 
        $('body').on('click', '.todo-list li', function () {
            $(this).toggleClass('delete-line');
        });    
}); // End Ready