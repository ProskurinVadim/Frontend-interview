export const getData = () => [
	{
		to: "/casino/presentors",
		text: "Presentors List",
		additionalMenu: [
			{
				to: "/casino/presentors/settings",
				text: "Presentors Settings",
			},
			{
				to: "/casino/presentors/schedule",
				text: "Presentors Schedule",

			}
		]
	},
	{
		to: "/casino/tables",
		text: "Tables List",
		additionalMenu: [{
			to: "/casino/tables/settings",
			text: "Tables Settings"
		}]
	}
]