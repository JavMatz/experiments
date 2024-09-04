#include <stdio.h>
#include <time.h>

int main (){
  unsigned int x_hours=0;
  unsigned int x_minutes=0;
  unsigned int x_seconds=0;
  unsigned int x_milliseconds=0;
  unsigned int totaltime=0,count_down_time_in_secs=0,time_left=0;

  clock_t x_startTime, x_countTime;

  count_down_time_in_secs = 10;

  x_startTime = clock();
  time_left = count_down_time_in_secs - x_seconds;

  while(time_left > 0) {
    x_countTime = clock();
    // Delta time, is it milliseconds?
    x_milliseconds = x_countTime - x_startTime;
    // When x_seconds > 60 then x_minutes > 0 and thus, the value below is always positive, it displays the seconds in a minute
    x_seconds = (x_milliseconds / (CLOCKS_PER_SEC)) - (x_minutes*60);
    x_minutes=(x_milliseconds/(CLOCKS_PER_SEC))/60;
    x_hours=x_minutes/60;

    time_left = count_down_time_in_secs - x_seconds;
    // printf("\r Time left is %d seconds\n", time_left);
    printf("\r Time left is %02d:%02d:%02d seconds", x_hours,x_minutes,x_seconds);
    fflush(stdout);
  }

  return 0;
};
