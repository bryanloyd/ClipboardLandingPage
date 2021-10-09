import React from "react";
import imac from "../images/image-computer.png";

const Snippets = () => {
  return (
    <div className="snippets">
      <div>
        <h4>Keep track of your snippets</h4>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <section className="snippets-features">
        <div>
          <img src={imac} alt="" />
        </div>
        <div className="snippets-features_list">
          <h5>Quick Search</h5>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h5>iCloud Sync</h5>
          <p>Instantly saves and syncs snippets across all your devices.</p>
          <h5>Complete History</h5>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Snippets;
