Blockly.Blocks['tello_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO name:")
        .appendField(new Blockly.FieldTextInput("TELLO-C56317"), "networkName")
        .appendField("password:")
        .appendField(new Blockly.FieldTextInput(""), "networkPswd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_emergency'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO emergency");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO speed")
        .appendField(new Blockly.FieldTextInput("10"), "cm")
        .appendField("cm/s (10-100)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO takeoff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO land");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO up")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO down")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO forward")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO backward")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO left")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO right")
        .appendField(new Blockly.FieldTextInput("20"), "cm")
        .appendField("cm (20-500)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_cw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO cw")
        .appendField(new Blockly.FieldTextInput("90"), "degree")
        .appendField("degree (1-360)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_ccw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO ccw")
        .appendField(new Blockly.FieldTextInput("90"), "degree")
        .appendField("degree (1-360)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tello_flip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TELLO flip")
        .appendField(new Blockly.FieldDropdown([
          ["Left","l"], 
          ["Right","r"], 
          ["Forward","f"], 
          ["Backward","b"]
        ]),"FLIP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};