# 372-assignment-2

Project Description: This a website built for the fictional Talbrook University office of student engagement. It's purpose is to give students a place to discover campus activities such as club fairs, talks, sports, concerts, and volunteering. The primary audience is current undergrad students and graduate students who have free time and are looking for something to do around campus.

Layout: 
1) Grid: The upcoming events grid (index.html) uses grids so cards reflow automatically as the viewport narrows. The featured event card, the main content/sidebar layout on event.html, and the hero section all use grids as well. 
2) Flexbox: Primary navigation uses display:flex with flex-wrap, wrap, and gap pm the ul so nav items wrap onto a second line.Related events on event.html uses flex-wrap, wrap, so three cards sit side by side on wide screens and wrap onto new lines. The about section uses a flex row so the two blocks sit side by side on desktop.

Responsive Design: Two breakpoints, both max-width media queries layered on a mobile-friendly base. 
1) 860px - the hero collapses to a single column, the featured event card drops from a 2-column span back to 1 column, the event-detail main/sidebar grid stacks to one column.
2) 560px - the header switches to a vertical nav list, section padding tightens, the event grid becomes a single column.
Testing: I reviewed the pages at three widths 1440px(desktop), 860px(tablet), and 390px(phone) checking that the nav, hero, event grid, featured card, and the event-detail main/sidebar layout all didn't have overlapped text and the sidebar registration stayed the same after moving to smaller screens. 

Semantic HTML: 
1) main - both pages use one main, elements are used purposefully not just for a generic wrapper
2) article - each event card and related-event card is an article because it is a self-contained and shareable unit
3) figure and figurecaption - the hero image and the large event photo each get a caption that explains what's pictured, tied to the image through figure rather than a floating paragraph
4) aside - the sidebar (date, location, organizer, admission, registration) supports the event write-up without being part of it, so it's marked up as complementary content via aside

Sources:
1) event 1 image: https://thefunones.com/picnic-tent-rental/
2) event 2 image: https://www.merriam-webster.com/grammar/wait-are-you-saying-a-podium-is-the-same-thing-as-a-lectern 
3) event 3 image: https://theparksdc.com/event/jazz-in-the-parks/ 
4) event 4 image: https://www.xgrass.com/open-play-areas.html 
5) event 5 image: https://www.saraharberson.com/blog/the-real-truth-about-community-service 
