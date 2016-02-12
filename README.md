Rendering Tweets with Angular & Node
===================

Sample application using Angular.js, Node.js, and Twitter API for use on OpenShift.


Installing and Running
----

Spin up a Node.js 0.10 cartridge (or higher) on [OpenShift Online](http://www.openshift.com) or OpenShift Enterprise.

Clone GitHub repo locally:

```
git clone https://github.com/michaelryanmcneill/sample-angular-node.git
```
Create a config.js file using config.sample.js as a template. Fill in your Twitter App API Keys. You will need to [create a Twitter application](https://apps.twitter.com/).

Copy the contents of the repository, including the .openshift/ directory and the config.js file to your private OpenShift repository and commit and deploy the changes. 

Once the deploy completes, go to [http://example-namespace.rhcloud.com](http://example-namespace.rhcloud.com) in your browser.

Resources
----
- [Angular Developer Guide](https://docs.angularjs.org/guide)
- [Twitter API User Timeline Documentaion](https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline)
- [Twitter API oEmbed Documentation](https://dev.twitter.com/docs/api/1/get/statuses/oembed)
