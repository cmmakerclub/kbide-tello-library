Blockly.JavaScript['tello_setup'] = function(block) {
  var text_networkname = block.getFieldValue('networkName');
  var text_networkpswd = block.getFieldValue('networkPswd');
  // TODO: Assemble JavaScript into code variable.
  var code =
  `
  #EXTINC#include <TELLO.h>#END
  #VARIABLE TELLO tello;#END
  #SETUP
  tello.begin("${text_networkname}", "${text_networkpswd}");
  #END
  `;
  return code;
};

Blockly.JavaScript['tello_emergency'] = function(block) {
  var code = `tello.emergency();\n`;
  return code;
};

Blockly.JavaScript['tello_speed'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.speed(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_takeoff'] = function(block) {
  var code = `tello.takeoff();\n`;
  return code;
};

Blockly.JavaScript['tello_land'] = function(block) {
  var code = `tello.land();\n`;
  return code;
};

Blockly.JavaScript['tello_up'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.up(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_down'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.down(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_forward'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.forward(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_backward'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.backward(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_left'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.left(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_right'] = function(block) {
  var value_cm = block.getFieldValue('cm');
  var code = `tello.right(${value_cm});\n`;
  return code;
};

Blockly.JavaScript['tello_cw'] = function(block) {
  var value_degree = block.getFieldValue('degree');
  var code = `tello.cw(${value_degree});\n`;
  return code;
};

Blockly.JavaScript['tello_ccw'] = function(block) {
  var value_degree = block.getFieldValue('degree');
  var code = `tello.ccw(${value_degree});\n`;
  return code;
};

Blockly.JavaScript['tello_flip'] = function(block) {
  var value_flip = block.getFieldValue('FLIP');
  var code = `tello.flip(${value_flip});\n`;
  return code;
};