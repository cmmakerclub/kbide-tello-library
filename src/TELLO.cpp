/******************************************************************
 * DJI Tello library for KB-IDE by bavensky (Maker Asia Co., Ltd.)
 *****************************************************************/

#include "TELLO.h"
#include <WiFi.h>
#include <WiFiUdp.h>
WiFiUDP udp_tello;

TELLO::TELLO() {}
TELLO::~TELLO() {}

void TELLO::TelloCommand(char *cmd) {
if (wifi_Connected) {
    udp_tello.beginPacket(udpAddress, udpPort);
    udp_tello.printf(cmd);
    udp_tello.endPacket();
    Serial.printf("Send [%s] to Tello.\n", cmd);
  } else {
    Serial.printf("Send Failed. Can't connect to Tello.\n", cmd);
  }
}

// void TELLO::WiFiEvent(WiFiEvent_t event) {
//   switch (event) {
//     case SYSTEM_EVENT_STA_GOT_IP:
//       Serial.print("WiFi connected! IP address: ");
//       Serial.println(WiFi.localIP());
//       wifi_Connected = true;

//       udp_tello.begin(WiFi.localIP(), udpPort);

//       TelloCommand("command");
//       delay(2000);

//       TelloCommand("speed 50");
//       delay(2000);

//       break;
//     case SYSTEM_EVENT_STA_DISCONNECTED:
//       Serial.println("WiFi lost connection");
//       wifi_Connected = false;
//       break;
//   }
// }

void TELLO::begin(const char * var_networkName, const char * var_networkPswd)
{
  networkName = var_networkName;
  networkPswd = var_networkPswd;

  WiFi.disconnect(true);
  // WiFi.onEvent(WiFiEvent);
  WiFi.begin(networkName, networkPswd);
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.println("Connecting...");
    wifi_count++;
    if(wifi_count >= 10) {
      ESP.restart();
    }
    delay(500);
  }
  Serial.print("WiFi connected! IP address: ");
  Serial.println(WiFi.localIP());
  wifi_Connected = true;
  udp_tello.begin(WiFi.localIP(), udpPort);
  TelloCommand("command");
  delay(1000);
  TelloCommand("speed 50");
  delay(1000);
}

void TELLO::sendCommand(const char * command) {
  TelloCommand(command);
}

void TELLO::speed(uint8_t cm) {
  String data = "speed " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::emergency() {
  TelloCommand("emergency");
}

void TELLO::takeoff() {
  TelloCommand("takeoff");
}

void TELLO::land() {
  TelloCommand("land");
}

void TELLO::up(uint8_t cm) {
  String data = "up " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::down(uint8_t cm) {
  String data = "down " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::forward(uint8_t cm) {
  String data = "forward " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::backward(uint8_t cm) {
  String data = "backward " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::left(uint8_t cm) {
  String data = "left " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::right(uint8_t cm) {
  String data = "right " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::cw(uint8_t degree) {
  String data = "cw " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::ccw(uint8_t degree) {
  String data = "ccw " + String(cm);
  TelloCommand(data.c_str());
}

void TELLO::flip(const char * direction){
  String data = "flip " + String(cm);
  TelloCommand(data.c_str());
}
