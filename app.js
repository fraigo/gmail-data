var app = new Vue({
    el: '#app',
    data: {
      title: 'Gmail Data',
      filter: 'subject:(Subscription Request)',
      mindate:null,
      limit:100,
      messages:[]
    }
  })