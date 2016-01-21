#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>

#define MSG_TRY "try again\n"
#define MSG_TIMEOUT "timeout\n"

int main(void)
{
	char buf[256];
	int fd, n, i;
	fd = open("/dev/ttyUSB0", O_RDONLY);
	if(fd<0) {
		perror("open /dev/tty");
		exit(1);
	}
	while(1) {
		n = read(fd, buf, 255);
		if(n >= 0) {
			write(STDOUT_FILENO, buf, n);
			break;
		}
		if(errno != EAGAIN) {
			perror("read /dev/ttyUSB0");
			exit(1);
		}
		write(STDOUT_FILENO, MSG_TRY, strlen(MSG_TRY));
	}
	close(fd);
	return 0;
}
