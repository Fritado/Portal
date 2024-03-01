import React from "react";

const SettingPage = () => {
  return (
    <div>
      <div
        className="d-flex flex-column border mb-2 bg-white justify-content-center p-4"
        style={{ marginRight: "4rem", marginLeft: "4rem", borderRadius: "8px" }}
      >
        {/* what is fritado */}
        <div className="d-flex flex-column py-3">
          <div className="">
            <h1>Settings Page</h1>
            <p>Updated over a week ago</p>
          </div>
        </div>

        <div className="pb-3 pt-1">
          <div>
            <img alt="" />
            <h3>Business Details</h3>
          </div>
        </div>
        <div className="py-3">
          <img alt="" />
          <p>
            Your business details help Seona understand your business. Seona
            will use this information while writing content for your code
            changes and blog posts. It is important to be as accurate as
            possible.
          </p>
          <ul>
            <li>
              Business name: The name of your business. This is pre-generated by
              Seona, but you may edit it here as well.
            </li>
            <li>
              Business description: A brief description about your business.
              This is pre-generated by Seona, but you may edit it here as well.
              You can use up to 1,200 characters.
            </li>
          </ul>
        </div>

        <div className="py-3">
          <h4>Code changes preference</h4>
          <p>
            You can edit your code changes preference here. This is the same
            selection from setting up Seona, and you can learn more here.
          </p>
        </div>

        <div className="py-3">
          <h4>Blog posts preference</h4>
          <p>
            You can edit your blog posts preference here. This is the same
            selection from setting up Seona, and you can learn more here.
          </p>
        </div>
        <div className="py-3">
          <h4>Weekly blog schedule</h4>
          <img alt="" />
          <p>
            Select your preferred day to receive new blog posts. If approved
            early, your blogs will be posted on this day during the following
            week. By default, the day of the week is set to the day you first
            purchased Seona. ​
          </p>
          <p className="my-1">
            <span>Note:</span>Changing this setting will alter future scheduled
            blog post dates.
          </p>
        </div>

        <div className="py-3">
          <h4>Cancelling your subscription</h4>
          <p>
            If you would like to cancel your Seona subscription, you can do so
            by either: selection from setting up Seona, and you can learn more
            here.
          </p>
          <ol>
            <li>
              Clicking “Cancel my subscription” under the user dropdown located
              at the top right corner of your dashboard, OR
            </li>
            <img alt="" />
            <li>Underneath the Billing section of the Settings page.</li>
            <img alt="" />
          </ol>
          <p>
            You will be led through a quick exit survey before you cancel your
            subscription. You will still receive access to Seona, the dashboard,
            and weekly updates until the end of your payment period.
          </p>
        </div>

        <div className="py-3">
          <h4>Manage your payments</h4>
          <p>
            If you need to manage your payments (changing a payment method or
            checking your billing status), you can do so by clicking “Manage
            payments” underneath the Billing section of the Settings page..
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
