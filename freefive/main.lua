Player:On("join", function(p)
  p:sendNotification("Hi, "..p.name)
end)
Player:On('addhp', function(p)
	p:setHealth(200)
end)
Player:On('addarmour', function(p)
	p:setArmour(100)
end)
Player:On('respawn', function(p)
	p:setHealth(0)
end)
Player:On('spawnveh', function(p, veh)
	print(veh)
	local x, y, z = p:getPosition()
	local h = p:getHeading()
	Vehicle:Create(veh, x, y, z, h)
end)


AddClientScript("UI_client.lua")