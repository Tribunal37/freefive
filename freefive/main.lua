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
Player:On('spawnveh', function(veh, p)
	print(veh)
	local pl = p:GetByID(0)
	local x, y, z = pl:getPosition()
	local h = pl:getHeading()
	Vehicle:Create(veh, x, y, z, h)
end)


AddClientScript("UI_client.lua")