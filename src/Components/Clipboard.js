import React from "react";

const Clipboard = () => {
  return (
    <div className="clipboard">
      <section>
        <h3>Clipboard for iOS and MacOS</h3>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </section>
      <section className="header-buttons">
        <button className="header-button-ios">Download for iOS</button>
        <button className="header-button-mac">Download for Mac</button>
      </section>
    </div>
  );
};

export default Clipboard;
