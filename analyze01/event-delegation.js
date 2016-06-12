$(function() {//jQuery function
  var listItem, itemStatus, eventType;//declare variables for this function

  $('ul').on(//for the included events w/ target <ul>
    'click mouseover',//any click or mouseover event
    ':not(#four)',//except w/ target with id of 'four'
    {status: 'important'},//if property of 'status' is 'important'
    function(e) {//when event is passed
      listItem = 'Item: ' + e.target.textContent + '<br />';//replace content of #notes w/ concat. text + content of event targ.
      itemStatus = 'Status: ' + e.data.status + '<br />';//continue replacement as above
      eventType = 'Event: ' + e.type;//continue replacement as above
      $('#notes').html(listItem + itemStatus + eventType);//execute replacement in DOM for display
    }
  );

});
