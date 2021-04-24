checkPrice();

function checkPrice() {
	$.ajax({
		url: "https://api.dex.guru/v1/tokens/0x7e5d52c3335c91af0da392bea4bb9e43f2aba62c-bsc/",
		dataType: "json",
		timeout: 30000,
		success: function(data) {
			$("#price").html("$" + data.priceUSD.toFixed(10));
			checkPrice();
		},
		error: function() {
			checkPrice();
		}
	});
}