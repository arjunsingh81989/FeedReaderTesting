# FeedReader Testing Project: Udacity's Front End NanoDegree Program

Technologies: Jasmine JS testing framework, Javascript.

## Testing Result

When the index page is opened in a web browser, the test suite is also run. The running indicator and result is shown at the bottom of the page. Any fail test is shown in red.

All tests (including additional tests) are expected to pass.

## Additional Tests

**Note:**

1. Addtional tests are marked with `/* ADDITION: ... */` comments in `feedreader.js` file under `jasmine/spec` folder.
2. All addition tests are expected to pass as well.

### "The menu" Test Suite

There are two additional tests for `The menu` test suite:

#### *The menu contains all feeds*

This test ensures that each item in `allFeeds` variable is shown in the `.feed-list` element in the order they appear in `allFeeds` variable.

#### *The menu is hidden when a feed is clicked*

This test ensures that the menu is hidden when a menu item is clicked. It first makes sure that the menu is shown, then expects the menu to be hidden when a menu item is clicked.

### "Initial Entries" Test Suite 

There are two additional tests for `Initial Entries` test suite:

#### *Initial entries have .entry-link element containing a non-empty URL*

This test ensures that when the `loadFeed` function is called and completes its work, each `.entry-link` element within the `.feed` container contains a non-empty string in its `HREF` attribute.
         
#### *Initial entries have .entry element containing a non-empty heading*

This test ensures that when the `loadFeed` function is  called and completes its work, each `.entry` element within the`.feed` container contains a non-empty `h2` element.
