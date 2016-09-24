/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* DONE: Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has each feed containing non-empty URL', function() {
            for (var idx in allFeeds) {
                expect(allFeeds[idx].url).toBeDefined();
                expect(allFeeds[idx].url).not.toBe("");
            }
        });


        /* DONE: Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has each feed containing non-empty name', function() {
            for (var idx in allFeeds) {
                expect(allFeeds[idx].name).toBeDefined();
                expect(allFeeds[idx].name).not.toBe("");
            }
        });
    });


    /* DONE: Test suite named "The menu" */
    describe('The menu', function() {

        /* DONE: Test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            expect($('.menu-hidden .slide-menu').length).toBe(1);
        });

         /* DONE: Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changed visibility when the menu icon is clicked', function() {
            // Click on the menu icon
            $('.menu-icon-link').click();
            // Then expect the menu is shown
            expect($('.menu-hidden .slide-menu').length).toBe(0);
            
            // Click on the menu icon again
            $('.menu-icon-link').click();
            // Then expect the menu is hidden
            expect($('.menu-hidden .slide-menu').length).toBe(1);
        });
        
        /* ADDITION: This test ensures that each item in allFeeds variable is 
         * shown in the feed-list element in the order they appear in allFeeds
         * variable.
         */
        it('contains all feeds', function() {
            $('.feed-list li a').each(function(idx, element) {
               expect(allFeeds[idx].name).toBe(element.innerHTML);
            });
        });
        
        /* ADDITION: This test ensures that the menu is hidden when a menu item
         * is clicked. It first makes sure the menu is shown, then expects
         * that the menu is hidden when a menu item is clicked.
         */
        it('is hidden when a feed is clicked', function() {
            // Click on the menu icon
            $('.menu-icon-link').click();
            // Then expect the menu is shown
            expect($('.menu-hidden .slide-menu').length).toBe(0);
            
            // Click on a menu item
            $('.feed-list li a').first().click();
            // Then expect the menu is hidden
            expect($('.menu-hidden .slide-menu').length).toBe(1);
        });
    });

    /* DONE: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
        
        var originalTimeout;

        /* Before each test is run */
        beforeEach(function(done) {
            // Set longer timeout for asynchronous task
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            
            // Clear the .feed container
            $('.feed').html('');
            // Call loadFeed and pass the test function after the loading
            // task is finished
            loadFeed(0, function() {
               done(); 
            });
        });
        
        /* DONE: Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has at least a single .entry element within the .feed container', 
        function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
        
        /* ADDITION: This test ensures that when the loadFeed function is 
         * called and completes its work, each .entry-link element within the
         * .feed container contains a non-empty string in its HREF attribute.
         */
        it('has each .entry-link element containing a non-empty URL', function() {
            $('.feed .entry-link').each(function(idx, element) {
                expect(element.href).toBeTruthy();
            });
        });
        
        /* ADDITION: This test ensures that when the loadFeed function is 
         * called and completes its work, each .entry element within the
         * .feed container contains a non-empty h2 element.
         */
        it('has each .entry element containing a non-empty heading', function() {
            $('.feed .entry h2').each(function(idx, element) {
                expect(element.innerHTML).toBeTruthy();
            });
        });
        
        // Restore default Jasmine's timeout
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
    
    /* DONE: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        
        /* DONE: Write a test that ensures when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         */
        
        var originalTimeout;
        var beforeContent;
        
        beforeEach(function(done) {
            // Set longer timeout for asynchronous task
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
      
            // Save current content of the .feed container before loading
            // another feed
            beforeContent = $('.feed').html();
            // Call loadFeed and pass the test function after the loading
            // task is finished
            loadFeed(1, function() {
               done(); 
            });
        });
        
        // Expect that the content of the .feed container after loadFeed finishes
        // is not the same as before
        it('has the content actually changed', function() {
            var afterContent = $('.feed').html();
            expect(afterContent).not.toEqual(beforeContent);
        });
        
        // Restore default Jasmine's timeout
        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
}());
