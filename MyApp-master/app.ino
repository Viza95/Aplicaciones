#include <Wire.h>
#include <LiquidCrystal_I2C.h>

int led13 = 13;
String  estado = "";

int redPin = 11;
int greenPin = 10;
int bluePin = 9;

LiquidCrystal_I2C lcd (0x3F, 16, 2);
void setup() {
  // put your setup code here, to run once:
  Wire.begin();
  lcd.begin(16, 2);
  lcd.clear();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Bl: Desconectado");

  Serial.begin(9600);


}

void loop() {


  if (Serial.available() > 0) {
    estado = "";
    estado = Serial.readString();
    if (estado == "CONECTED") {
      Wire.begin();
      lcd.begin(16, 2);
      lcd.clear();
      lcd.backlight();
      lcd.setCursor(0, 0);
      lcd.print("BL: Conectado");
    } else {
      Wire.begin();
      lcd.setCursor(0, 1);
      lcd.print("");
      lcd.print(estado);
      digitalWrite(led13, HIGH);
    }
  }
  analogWrite(redPin, 0); 

}

