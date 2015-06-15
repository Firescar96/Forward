Router.route('/send', function() {
  this.render('send')});

var interface_abi = [
  {
      "name": "get_storage_address()",
      "type": "function",
      "inputs": [],
      "outputs": [{ "name": "out", "type": "int256" }]
  },
  {
      "name": "send_ether(int256)",
      "type": "function",
      "inputs": [{ "name": "amount", "type": "int256" }],
      "outputs": []
  },
  {
      "name": "set_storage_address(int256)",
      "type": "function",
      "inputs": [{ "name": "storage_address", "type": "int256" }],
      "outputs": []
  },
  {
      "name": "set_send_ether_address(int256)",
      "type": "function",
      "inputs": [{ "name": "send_ether_address", "type": "int256" }],
      "outputs": []
  },
  {
      "name": "get_send_ether_address()",
      "type": "function",
      "inputs": [],
      "outputs": [{ "name": "out", "type": "int256" }]
  },
  {
      "name": "update_creator(int256)",
      "type": "function",
      "inputs": [{ "name": "creator_address", "type": "int256" }],
      "outputs": []
  }];


Template.send.rendered = function() {
  var input_name = localStorage.getItem("user_id");
  $('#name').text("Hi, " + input_name);

  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var coinbase = web3.eth.coinbase;
  console.log(coinbase);
  $('#coinbase').text(coinbase);
  var balance = web3.eth.getBalance(coinbase);
  console.log(balance.toString(10));
  $('#balance').text(web3.toDecimal(balance));

  $('#send-button').click(function() {
    console.log("Here we go")
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    var coinbase = web3.eth.coinbase;
    var InterfaceContract = web3.eth.contract(interface_abi);
    console.log(InterfaceContract)
    var amount = $("#amount").val();
    console.log(amount)

    window.interface_contract = InterfaceContract.at('0x9847fb68d77fcfc2699df45392388f56498793ba');
    window.interface_contract.send_ether.sendTransaction(
      amount,
      { from: coinbase,
        value: amount,
        gas: 1000000000000000,
        gasPrice: 1
      },
      function(err) {
        if(!err) {
          console.log('send ether transaction sent.');
        }
        else {
          console.log(err);
        }
      }
    );
  });
}
