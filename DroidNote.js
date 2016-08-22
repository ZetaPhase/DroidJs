
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "FillXY" );
	layh = app.CreateLayout( "linear", "Horizontal" );

    /*
	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" );
	txt.SetTextSize( 32 );
	lay.AddChild( txt );
	
	//Create an image and add it to layout
	img = app.CreateImage("Img/dna.jpg");
	lay.AddChild(img);
	
	//Create a popup button and add it to layout
	btn = app.CreateButton("Press Me!");
	btn.SetOnTouch(btn_OnTouch);
	lay.AddChild(btn);
	*/
	
	txtbox = app.CreateTextEdit("Write Something.", 1, 0.9);
	btn1 = app.CreateButton("Save", 0.3, 0.1);
	btn2 = app.CreateButton("Load", 0.3, 0.1);
	
	myText = txtbox.GetText();
	console.log(typeof myText)
	console.log("hi");
	console.log(myText);
	btn1.SetOnTouch(save);
	btn2.SetOnTouch(load);
	
	layh.AddChild(btn1);
	layh.AddChild(btn2);
	lay.AddChild(txtbox);
	lay.AddChild(layh);
	
	
	//Add layout to app.	
	app.AddLayout( lay );
	
	console.log("Done adding layout")
}

function save()
{
    console.log("i am in save")
    filename = prompt("Write file name.");
    //txt = txtbox.GetText;
    app.WriteFile(filename, myText);
}

function load()
{
    filename = prompt("Write file name.");
    txt = app.ReadFile(filename);
    txtbox.SetText(txt);
}
