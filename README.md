# Welcome to Notes App 👋

It is a backend application for managing notes, built with Node.js and TypeScript. It leverages MongoDB for data storage and Mongoose as the Object Data Modeling (ODM) library to simplify database interactions.  provides robust CRUD functionality for notes and tags, ensuring seamless and efficient note management

# Routes 
 __. /notes__ : CRUD opearion about notes
 
 __. /tags__ : CRUD opearion about notes

# End Points

__. GET V0/api/notes__  : Fetch all note

__. POST V0/api/notes__  : create a new note

__. PATCH V0/api/notes__  : update a note 

__. DELETE V0/api/notes__  : delete a note

__. GET V0/api/tags__  : Fetch all tags

__. POST V0/api/tags__  : create a new tag

__. Patch V0/api/tags__  : update a tag 

__. DELETE V0/api/tags__  : delete a tag

__.POST V0/api/notes/:noteID/tags/tagsID__ : add a tag to a note

__.Delete V0/api/notes/:noteID/tags/tagsID__ : delete a tag from a note

# Schemas 

__Note Model__ : 

title : string

content : string

createdAt : date

updatedAt:date

tags : array of ObjectID

__Tag Mode__ : 

name :string

createdAt:date

updatedAt:date


```json
{
}



