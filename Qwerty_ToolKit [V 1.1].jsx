//Qwerty_Toolkit [V 1.1]
//By Vijay Kumar V aka Qwerty
//find me on 
//  Instagram - @qwerty_vj
//  Discord - Qwerty#7646
//  Email - qwerty.modesign@gmail.com
//  Twitter - @qwerty_vj


//Window
{
    function qwertyToolKit(thisObj){
        function myScript_buildUI(thisObj){
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Qwerty_ToolKit V1.1", undefined, {resizeable: true, closeButton:true});

            //UI_BUILD
            res = "group{orientation : 'column', alignChildren: 'left', spacing: 8, margins: 2,\
            timeGroup: Panel{orientation: 'row', text: 'Time', alignChildren: 'left', spacing: 12, margins: 6,\
                timeGroupOne: Group{orientation: 'column', alignChildren: 'left', spacing: 6, margins: 2,\
                    timeTextBox: EditText{text: '1'},\
                    timeGroupOneSub: Group{orientation: 'row', alignChildren: 'left', spacing: 8, margins: 2,\
                        xTimeCheckBox: Checkbox{alignChildren: 'left', text: 'x'},\
                        yTimeCheckBox: Checkbox{alignChildren: 'left', text: 'y'},\
                    },\
                },\
                timeGroupTwo: Group{orientation: 'column', alignChildren: 'left', spacing: 8, margins: 2,\
                    applyTimeButton: Button{text: 'T', alignChildren: 'top'},\
                },\
            },\
            wiggleGroup: Panel{orientation: 'row', text: 'Wiggle', alignChildren: 'left', spacing: 12, margins: 6,\
                wiggleGroupOne: Group{orientation: 'column', alignChildren: 'left', spacing: 4, margins: 2,\
                wiggleGroupOneSub1: Group{orientation: 'row', alignChildren: 'left', spacing: 6, margins: 2,\
                   wiggleFreqTextBox: EditText{text: '0.1'},\
                   wiggleAmpTextBox: EditText{text: '10'},\},\
                    wiggleGroupOneSub2: Group{orientation: 'row', alignChildren: 'left', spacing: 20, margins: 2,\
                        xWiggleCheckBox: Checkbox{alignChildren: 'left', text: 'x'},\
                        yWiggleCheckBox: Checkbox{alignChildren: 'left', text: 'y'},\
                    },\
                },\
                wiggleGroupTwo: Group{orientation: 'column', alignChildren: 'left', spacing: 8, margins: 2,\
                    applyWiggleButton: Button{text: 'W', alignChildren: 'top'},\
                },\
            },\
            groupClose: Group{orientation: 'row', alignChildren: 'right',\
                    removeExpressionButton: Button{text: 'Re_Exp'},\
                    },\
            }";

            myPanel.grp = myPanel.add (res);

            //Time variables
            var timeText_Box = myPanel.grp.timeGroup.timeGroupOne.timeTextBox;
            var xTime_Checkbox = myPanel.grp.timeGroup.timeGroupOne.timeGroupOneSub.xTimeCheckBox;
            var yTime_Checkbox = myPanel.grp.timeGroup.timeGroupOne.timeGroupOneSub.yTimeCheckBox;
            var applyTime_Button = myPanel.grp.timeGroup.timeGroupTwo.applyTimeButton;

            //Time Panel Functions//
            timeText_Box.size = [60,20];
            xTime_Checkbox.value = false;
            yTime_Checkbox.value = false;
            applyTime_Button.size = [25,25];
            //myPanel.grp.timeGroup.graphics.backgroundColor = myPanel.grp.timeGroup.graphics.newBrush (myPanel.grp.timeGroup.graphics.BrushType.SOLID_COLOR, [0.21, 0.225, 0.25]);

            // Begin Time
            applyTime_Button.onClick = function(){
                app.beginUndoGroup("Time_Expression");

                var mySelProperties = app.project.activeItem.selectedProperties;

                //Check Selected Properties
                if(mySelProperties.length == 0){
                     alert("Please Select a Property");
                     return false;
                } else{
                     var mySelProperties = app.project.activeItem.selectedProperties;
                        for(var i = 0; i < mySelProperties.length; i++){
                                if(mySelProperties[i].propertyValueType == PropertyValueType.OneD){
                                    mySelProperties[i].expression = "time * " + parseInt(timeText_Box.text);
                                } else{
                                    if(xTime_Checkbox.value == true){
                                        mySelProperties[i].expression = "x = value[0];\ry = value[1];\r[x + (time * " + parseInt(timeText_Box.text) + "), y];";
                                    } if(yTime_Checkbox.value == true){
                                        mySelProperties[i].expression = "x = value[0];\ry = value[1];\r[x, y + (time * " + parseInt(timeText_Box.text) + ")];";
                                    } if(yTime_Checkbox.value == true && xTime_Checkbox.value == true){
                                        mySelProperties[i].expression = "x = value[0];\ry = value[1];\r[x + (time * " + parseInt(timeText_Box.text) + "), y + (time * " + parseInt(timeText_Box.text) + ")];";
                                    }
                                    } 
                        }
                    }
                 app.endUndoGroup();
            } // End Time


            //Wiggle variables
            var wiggleFreqText_Box = myPanel.grp.wiggleGroup.wiggleGroupOne.wiggleGroupOneSub1.wiggleFreqTextBox;
            var wiggleAmpText_Box = myPanel.grp.wiggleGroup.wiggleGroupOne.wiggleGroupOneSub1.wiggleAmpTextBox;
            var xWiggle_Checkbox = myPanel.grp.wiggleGroup.wiggleGroupOne.wiggleGroupOneSub2.xWiggleCheckBox;
            var yWiggle_Checkbox = myPanel.grp.wiggleGroup.wiggleGroupOne.wiggleGroupOneSub2.yWiggleCheckBox;
            var applyWiggle_Button = myPanel.grp.wiggleGroup.wiggleGroupTwo.applyWiggleButton;
            

            //Wiggle Panel Functions//
            wiggleFreqText_Box.size = [40,20];
            wiggleAmpText_Box.size = [40,20];
            xWiggle_Checkbox.value = false;
            yWiggle_Checkbox.value = false;
            applyWiggle_Button.size = [25,25];
            //myPanel.grp.wiggleGroup.graphics.backgroundColor = myPanel.grp.timeGroup.graphics.newBrush (myPanel.grp.wiggleGroup.graphics.BrushType.SOLID_COLOR, [0.21, 0.225, 0.25]);

            // Begin Wiggle
            applyWiggle_Button.onClick = function(){
                app.beginUndoGroup("Wiggle_Expression");

                var mySelProperties = app.project.activeItem.selectedProperties;

                //Check Selected Properties
                if(mySelProperties.length == 0){
                     alert("Please Select a Property");
                     return false;
                } else{
                     var mySelProperties = app.project.activeItem.selectedProperties;
                        for(var i = 0; i < mySelProperties.length; i++){
                                if(mySelProperties[i].propertyValueType == PropertyValueType.OneD){
                                    mySelProperties[i].expression = "wiggle(" + parseInt(wiggleFreqText_Box.text) + ", " + parseInt(wiggleAmpText_Box.text) + ");";
                                } else{
                                    if(xWiggle_Checkbox.value == false && yWiggle_Checkbox.value == false){
                                        mySelProperties[i].expression = "wiggle(" + parseInt(wiggleFreqText_Box.text) + ", " + parseInt(wiggleAmpText_Box.text) + ");";
                                    } if(xWiggle_Checkbox.value == true){
                                        mySelProperties[i].expression = "w = wiggle(" + parseInt(wiggleFreqText_Box.text) + ", " + parseInt(wiggleAmpText_Box.text) + ");\r[w[0], value[1]];";
                                    } if(yWiggle_Checkbox.value == true){
                                        mySelProperties[i].expression = "w = wiggle(" + parseInt(wiggleFreqText_Box.text) + ", " + parseInt(wiggleAmpText_Box.text) + ");\r[value[0], w[1]];";
                                    } if(yWiggle_Checkbox.value == true && xWiggle_Checkbox.value == true){
                                        mySelProperties[i].expression = "w = wiggle(" + parseInt(wiggleFreqText_Box.text) + ", " + parseInt(wiggleAmpText_Box.text) + ");\r[w[0], w[1]];";
                                    }
                                    } 
                        }
                    }
                 app.endUndoGroup();
            } // End Wiggle



            //Remove_Expression
                //Close_Buttons
                    myPanel.grp.groupClose.removeExpressionButton.size = [75,30];


                    myPanel.grp.groupClose.removeExpressionButton.onClick = function(){
                        app.beginUndoGroup("Remove_Expression");
                        var selectedProperties = app.project.activeItem.selectedProperties;
                        if(selectedProperties.length == 0){
                                alert("please select a property");
                                return false;
                            }
                        else{
                                for(var i = 0; i < selectedProperties.length; i++){
                                    selectedProperties[i].expression = "";
                                    }
                                }
                        app.endUndoGroup();
                    }
            
            //End Remove_Expression

            myPanel.layout.layout(true);
            return myPanel;

        }

        var myScriptPal = myScript_buildUI(thisObj);
        if(myScriptPal != null && myScriptPal instanceof Window){
            myScriptPal.center();
            myScriptPal.show();
        }

    }
    qwertyToolKit(this);
}