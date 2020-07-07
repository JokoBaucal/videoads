var player = flowplayer('#player',
  { src: "//edge.flowplayer.org/drive.mp4",
      title: "Flowplayer demo",
      description: "Demo showing ads",
   ima: {
     ads: [{"time":0,"adTag":"https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator="},{"time":-1,"adTag":"https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator="},{"time":5,"adTag":"https://pubads.g.doubleclick.net/gampad/ads?sz=480x70&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dnonlinear&correlator="}]},"token":"eyJraWQiOiJ0QTB3ZXhqODhrUHciLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NixcImlkXCI6XCJ0QTB3ZXhqODhrUHdcIixcImRvbWFpblwiOltcInMuY29kZXBlbi5pb1wiXX0iLCJpc3MiOiJGbG93cGxheWVyIn0.PB25ufW_Kuuf7otErbIK50Q8N73TbP5F8qeCBUbJNqiq81yxjbLUgYkdkyNSRosGRAlkbTmtEUGp8KykRIXzig"
})

var btn = document.querySelector('#ad-toggle');

btn.addEventListener('click', function() {
  if (player.ads.adPlaying) player.ads.pause();
  else player.ads.resume();
})

function toggleDisabled(disabled) {
  return function() { btn.disabled = disabled }
}

player.ads.on(flowplayer.AdEvents.AD_STARTED, toggleDisabled(false));
player.ads.on(flowplayer.AdEvents.AD_COMPLETED, toggleDisabled(true));
player.ads.on(flowplayer.AdEvents.AD_SKIPPED, toggleDisabled(true));
