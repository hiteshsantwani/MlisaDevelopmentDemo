	function populateMoreData(row) {
		var rowData = row.getData();
		document.getElementById("Labelcp").innerHTML = rowData["CP"].split('T')[0];
		document.getElementById("LabelLayDate").innerHTML = rowData["LayDate"].split('T')[0];
		document.getElementById("LabelCharterer").innerHTML = rowData["Charterer"];
		document.getElementById("LabelEffectiveControl").innerHTML = rowData["EffectiveControl"];
		document.getElementById("LabelCargo").innerHTML = rowData["Cargo"];
		document.getElementById("LabelSize").innerHTML = rowData["Size"];
		document.getElementById("LabelStatus").innerHTML = rowData["Status"];
		document.getElementById("LabelLoad").innerHTML = rowData["Load"];
		document.getElementById("LabelDischarge").innerHTML = rowData["Discharge"];
		document.getElementById("pfId").innerHTML = rowData["ID"];
	}
	
    function myFunction() {
		var fixtureName = document.getElementById("FixtureSearch").value;
		var fixtureNumber = document.getElementById("FixtureNumberSearch").value;
		
		if (fixtureName === "" && fixtureNumber === ""){
			return;
		}
		var url = new URL("http://localhost:55530/api/mlisa/pf_FixturesFrontApp?VesselName=" + encodeURIComponent(fixtureName) + "&FixtureNumber=" + encodeURIComponent(fixtureNumber));
		
		//define table
		var table = new Tabulator("#myData", {
			height:"311px",
			layout:"fitColumns",
			placeholder:"No Data Set",
			columns:[
			{title:"Fixture Number", field:"FixtureNumber", sorter:"number"},
			{title:"Vessel Name", field:"VesselName", sorter:"string"},
			{title:"Charter Party Date", field:"CharterPartyDate", sorter:"date", formatter:function(cell, formatterParams){
				try {
					return cell.getValue().split('T')[0];
				} catch(err){
					return '';
				}
			},},
			{title:"Charterer", field:"Charterer", sorter:"string"},
			{title:"Owner", field:"owner", sorter:"string"},
		],
		rowClick:function(e, row){
			populateMoreData(row)
		},
		});
		
        fetch(url, {
		
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
         
        headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwic3ViIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwiYXVkIjoiQW55IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsIm5iZiI6MTU3MDAyNTUzOSwiZXhwIjoxNTcwMTExOTM5LCJpc3MiOiJodHRwczovL2F0bGlzLm1jcXVsbGluZy5jb20ifQ.kv41FqX_YNFxLKa2FQGxbogQQMcU1tIotJbpE5PWcio'
                 }
        })
        .then(response => response.json())
		.then( data => {
			table.setData(data);
			console.log(data);
		})
    }
