console.log("My github console");

$( document ).ready(function() {    
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"https://sdks.shopifycdn.com/polaris/latest/polaris.css\" />");

        var html = "<button type='button' class='Polaris-Button'><span class='Polaris-Button__Content'><span>Add Jackyy</span></span></button>";


    $('#jackylestore').append(html);
    //   <div style="height: 500px;"><button type="button" class="Polaris-Button"><span class="Polaris-Button__Content"><span>Open</span></span></button></div>
});
