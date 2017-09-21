local menuopened = false
local menuloaded = false

local browser = UI:Browser("http://orange/resources/freefive/html/index.html")

browser:on("load", function()
	print("<h1>[UI] load complete</h1>")
	menuloaded = true
end)

UI:On("KeyPress", function(key)
	if menuloaded and not menuopened and key == Button.Y then
		menuopened = true
		browser:execJS("openmenu()")
		UI:ShowCursor(true)
	elseif menuloaded and menuopened and key == Button.Escape then
		menuopened = false
		browser:execJS("closemenu()")
		UI:ShowCursor(false)
	end
end)

browser:on("addhp", function()
	Server:Trigger('addhp')
end)
browser:on("addarmour", function()
	Server:Trigger('addarmour')
end)
browser:on("respawn", function()
	Server:Trigger('respawn')
end)
browser:on("spawnveh", function(veh)
	print(veh)
	Server:Trigger('spawnveh', veh)
end)



Thread:new(function()
	while true do
		if menuopened then
			Native.SetPauseMenuActive(false);
			if Native.GetLastInputMethod(2) then
				Native.DisableControlAction(0, 0, false);
				for i = 7, 337 do
					Native.DisableControlAction(0, i, false);
				end
			end
		end
		Thread:Wait()
	end
end)
