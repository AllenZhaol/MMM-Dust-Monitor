# -*- coding: utf-8 -*
import serial
import time
        
ser = serial.Serial("/dev/ttyAMA0", 2400)#/dev/ttyAMA0

def main():
    mm = 0
    while 1:
        count = ser.inWaiting()
        if count != 0:
            recv = ser.read(count)
            for i in range(10):
                if recv[i] == 0xaa:
                    mm = i
                    break
            if(recv[mm] != 0xaa or recv[mm+6] != 0xff):
                return -1
            dataDo = recv[i+1] + recv[i+2] + recv[i+3] + recv[i+4]
            if (recv[i+5] != dataDo):
                return -1

            sensorData = (recv[i+1]*256+recv[i+2])/1024.0*8.0
            ud = sensorData*800
            print(ud)
            return ud
        time.sleep(1)

main()

