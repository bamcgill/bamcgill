CC      = gcc
CFLAGS  = -g
RM      = rm -f


default: all

all: Hello

Hello: HelloWorld.c
	$(CC) $(CFLAGS) -o Hello HelloWorld.c

clean veryclean:
	$(RM) Hello
