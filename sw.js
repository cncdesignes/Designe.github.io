var C='cnc-design-v2';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(function(r){
    if(r&&r.ok&&r.type==='basic'){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)}).catch(function(){})}
    return r;
  }).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match('./')})}));
});
