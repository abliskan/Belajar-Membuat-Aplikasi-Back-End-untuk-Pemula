const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler, } = require('./handler');
/*
{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
},
*/
const routes = [
    // menyambungkan file handler.js | addNoteHandler
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    // menyambungkan file handler.js | getAllNotesHandler
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    // menyambungkan file handler.js | editNoteByIdHandler
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    // menyambungkan file handler.js | deleteNoteByIdHandler
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },
];