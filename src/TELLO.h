/******************************************************************
 * DJI Tello library for KB-IDE by bavensky (Maker Asia Co., Ltd.)
 ******************************************************************/

#ifndef tello_h
#define tello_h

#include <Arduino.h>


#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

class TELLO
{
public:
  TELLO();
  ~TELLO();

  // void WiFiEvent(WiFiEvent_t event);

  void begin(const char * var_networkName, const char * var_networkPswd);
  void sendCommand(const char * command);
  void speed(uint8_t cm);
  void emergency();
  void takeoff();
  void land();
  void up(uint8_t cm);
  void down(uint8_t cm);
  void forward(uint8_t cm);
  void backward(uint8_t cm);
  void left(uint8_t cm);
  void right(uint8_t cm);
  void cw(uint8_t degree);
  void ccw(uint8_t degree);
  void flip(const char * direction);


  // String readBattery();


protected:

private:
  void TelloCommand(char *cmd);
  const char * networkName = "TELLO-XXXXXX";
  const char * networkPswd = "";
  const char * udpAddress = "192.168.10.1";
  const int udpPort = 8889;
  char packetBuffer[255];
  uint8_t wifi_count = 0;
  String message = "";
  boolean wifi_Connected = false;
};

#endif /*tello_h*/
