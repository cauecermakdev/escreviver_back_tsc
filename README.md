# escreviver_back_tsc

<h1>#Rotas</h1>
<p>
POST: /tag
Body: { "name": "tag1" }
</p>
<p>
POST: /texto </p>
<p>
Body:{
  "date" : "02/03/1999",
  "title": "Good Life",
  "description":"A vida nem sempre é simples! Mas é simples sempre!",
  "tagName":"tag1"
 }
 </p>

<p>
PUT: /tags
</p>
<p>
Body:{
  "id":1,
  "name":"tag2"
}
</p>

<p>
GET:/textos
GET:/tags
</p>
<p>
DELETE:/texto?id=1
</p>
<p>
UPDATE:/tags
{
  "id":1,
	"name":"newTagName"
 }
 </p>
