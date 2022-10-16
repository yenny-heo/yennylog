import { useEffect } from "react";

const HeadingObserverHook = () => {
  const getHeadingElements = () => {
    const headingTags = ["h1", "h2", "h3", "h4", "h5"];
    let headingElements = [];
    const content = document.getElementById("post-content");
    if (content) {
      headingTags.forEach(headingTag => {
        const headings = content.getElementsByTagName(headingTag);
        headingElements = headingElements.concat([...headings]);
      });
    }
    return headingElements;
  };

  const getAnchorElement = headingId => {
    const tableOfContents = document.getElementById("table-of-contents");
    const [anchor] = tableOfContents.querySelectorAll(
      `a[href='#${encodeURI(headingId)}']`
    );
    const allAnchor = tableOfContents.getElementsByTagName("a");
    [...allAnchor].forEach(item => item.classList.remove("active"));
    return anchor;
  };

  useEffect(() => {
    const onIntersect = async (entries, observer) => {
      let intersectingHeading = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectingHeading = entry.target;
        }
      });
      if (!intersectingHeading) return;
      const anchor = getAnchorElement(intersectingHeading.id);
      if (!anchor) return;
      anchor.classList.add("active");
    };
    const headingElements = getHeadingElements();
    let observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px 0px -80% 0px",
    });
    headingElements.forEach(headingElement => {
      observer.observe(headingElement);
    });
  }, []);
  return {};
};
export default HeadingObserverHook;
