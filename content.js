// Skip if RewardsHubSettings is already defined to avoid duplicate loading
var foundRDScripts = document.querySelectorAll('script[src*="rewardsden.com"]');

if(foundRDScripts.length === 0) {
  console.log('RewardsDen Chrome Extension: loading RewardsHub...');

  var js = document.createElement("script");
  js.async=true;
  js.src="https://static.rewardsden.com/loaders/805440818f45ef69510ffc0accfa5864992d48daf29c11779f2e6d2a2777d909.js";
  document.body.appendChild(js);
} else {
  console.log('RewardsDen Chrome Extension: found existing RewardsDen scripts, skipping');
}
