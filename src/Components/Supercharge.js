import React from "react";
import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";

const Supercharge = () => {
  return (
    <div className="supercharge">
      <div>
        <h4>Supercharge your workflow</h4>
        <p>We've got the tools to boost your productivity.</p>
      </div>
      <section className="supercharge-features">
        <div>
          <img src={blacklist} alt="" />
          <h5>Create Blacklists</h5>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div>
          <img src={text} alt="" />
          <h5>Plain text snippets</h5>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div>
          <img src={preview} alt="" />
          <h5>Sneak Preview</h5>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Supercharge;
