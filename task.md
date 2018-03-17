# List of bands

Create a web page that will load and display data about bands. The data is available [here](https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json)<sup>[1](#myfootnote1)</sup>. The web page should have the following functionalities:

## Main Task

When opening the page, the user will be presented with a list of bands. **The list will have at most 10 items**<sup>[2](#myfootnote2)</sup>. The list will contain the following fields:

- Row number
- Name of the band
- Visual indication if the band is active
- Comma-separated list of tags
- List of current band members (each on a separate line)
- Total number of albums

**The columns: Name and Total number of albums should be sortable**  
Initially the data will not be sorted, clicking on the Name header should sort the data ascendingly by name, and clicking on the Albums header should sort the data descendingly by album count. Clicking on an already sorted header should invert the sort order.
The current sort order must be indicated somehow.

**Above and below** the list there should be a panel with the following controls:

- Search box that allow the user to filter the bands by name
- Tag dropdown that will be filled by all the available tags<sup>[3](#myfootnote3)</sup> that will make the list only show bands that have that tag
- A checkbox that will make the list to only show active bands
- Paging controls, if needed.

## Extra Task 1

Create an additional web page using the same data, but with the following format:  
The list of bands is offered in a dropdown. Once a band is selected, the data about the band is shown from the list is shown, along with:
- List of past members
- Album summary (How many albums of each type the band has issued)
- Years active
- Chronological list of albums

It would be ideal if this page shares the code with the list page, i.e.you don't copy and paste the code twice 


#### Footnotes
 <a name="myfootnote1">1</a>: You can do whatever you want with the data, including but not limited to: accessing it via ajax, loading it directly in the application, hosting it on a server and accessing it via API, pasting it in the application. Of course, not all approaches are equally pretty or desirable, but whatever works :)

 <a name="myfootnote2">2</a>: This means that you need paging if more than 10 items are in the list

 <a name="myfootnote3">3</a>: A nice touch would be to add an "All" option, that will return all values

 
 
