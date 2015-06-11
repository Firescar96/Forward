extern storage.se: [gain_access:i:_,has_access:i:i, revoke_access:i:_, send:ii:_, update_creator:i:_]

data sa  # storage_address
data ha  # helpers_address
data ia  # interface_address
data creator


def init():
    self.creator = msg.sender

def update_creator(creator_address):
	if msg.sender == self.creator:
		self.creator = creator_address

def set_storage_address(storage_address):
    if msg.sender == self.creator:
        self.sa = storage_address

def get_storage_address():
    return self.sa

def set_interface_address(interface_address):
    if msg.sender == self.creator:
        self.ia = interface_address

def get_interface_address():
    return self.ia

def set_helpers_address(helpers_address):
    if msg.sender == self.creator:
        self.ha = helpers_address

def get_helpers_address():
    return self.ha

def send_ether(sender_address, receiver_address, amount):
    if msg.sender == self.ia
        self.sa.send(shareholder_address, amount)
        send(self.sa, amount)
        self.ha.send_ether_from_storage(receiver_address, amount)
