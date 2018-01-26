# Modifications and Fixes
___

### Fixed
- item card: price should be aligned to the right with bigger font and to the top of the "see more button" (Done 32px)
- item card: "see more" button should be wider (Done)
- item card: title color should be "525C65" (Done also as default color for site)
- the dark gray color you are using "darkslate gray" should be replaced with "525C65" (Done also as default color for site)
- search & filters bar text color should be "999999" (Done)
- search & filters bar has a small white corners that needs to be rounded  (Done)
- both search & filters bars height should be bigge and text should have more spacing (Done)
- bottom search & filters bar background shuld be light gray with no shadow (Done)
- "post an add" button needs to be bigger and text centered (Done)
- the search icon used is not the same as in the design, please use the attached one  (Done)
- header pattern need some alpha "60%" (Done)
- search bar the placeholder and icons are overlapping (Done, Bug in Chrom, Fixed with text-align-last)
- the section below the categories cards should be a navigation bar "when you scroll down it should be fixed to the top of te screen" (Done with Jquery check custom.js)
- Searchbar should not have border specially the one in the navbar  (Done)
- items grid: margin on the sides should be bigger  (Done)
	- .ItemBlock make margin "margin: 0px 15px 30px 15px;" (Done)
	- .ItemsContainer padding: 25px 20px; (Done)
	- the moment the navbar becomes fixed the screen is flicking and a portion of the first ad is getting hidden below the navbar  (Done, flicking is happening because the content is too short, Fixed)
- search bar height should be 10px smaller ".SearchBar-box height: 54px;" (Done)
- categories container needs padding from the sides (Done)
	- .CategoriesContainer padding: padding: 15px 15px 0 15px; (Done)
	- .CategoryBox width: 290px; but we need to make them bigger on bigger screens, now on big screens we are getting very big white spaces (Done, but what size should it be on wide screens ?? )
- navbar logo need to be on top not the other way around "low priority" (Done)
- on mobile
    - the "+" sing in the post new ad button needs to be centered and bigger (Done) (If you want we can add a tooltip module for every element that doen't have text)
    - background pattern is very small (Done, added 4 different media queries)
    - The navbar now is taking the most of the screen, cant see ads

___
### In Progress
- more button in the navbar is not showing a menu
- parallax is not being applied to the header items "the search bar, title, ads count"

