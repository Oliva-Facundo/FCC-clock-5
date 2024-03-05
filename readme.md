Historia de usuario #1: Puedo ver un elemento con id="break-label" que contiene una cadena (por ejemplo: "Break Length").

Historia de usuario #2: Puedo ver un elemento con id="session-label" que contiene una cadena (por ejemplo, "Session Length").

Historia de usuario #3: Puedo ver dos elementos que se pueden hacer clic con sus correspondientes IDs: id="break-decrement" y id="session-decrement".

Historia de usuario #4: Puedo ver dos elementos que se pueden hacer clic con sus correspondientes IDs: id="break-increment" y id="session-increment".

Historia de usuario #5: Puede ver un elemento con un id="break-length", que por defecto (en la carga) muestra un valor de 5.

Historia de usuario #6: Puedo ver un elemento con un correspondiente id="session-length", que por defecto muestra un valor de 25.

Historia de usuario #7: Puedo ver un elemento con un correspondiente id="timer-label", que contiene una cadena que indica que se inicializa una sesión (por ejemplo, "Session").

Historia de usuario #8: Puedo ver un elemento con el correspondiente id="time-left". NOTA: En pausa o en ejecución, el valor de este campo debe mostrarse siempre en formato mm:ss (es decir, 25:00).

Historia de usuario #9: Puedo ver un elemento que se puede hacer clic con el correspondiente id="start_stop".

Historia de usuario #10: Puedo ver un elemento que se puede hacer clic id="reset".

Historia de usuario #11: Cuando hago clic en elemento con el id de reset, cualquier temporizador en marcha debe detenerse, el valor dentro de id="break-length" debe volver a 5, el valor dentro de id="session-length" debe volver a id="time-left" debe restablecerse a su estado por defecto.

Historia de usuario #12: Cuando hago clic en elemento con el id de break-decrement, el valor dentro de id="break-length" disminuye en un valor de 1, y puedo ver el valor actualizado.

Historia de usuario #13: Cuando hago clic en elemento con el id de break-increment, el valor dentro de id="break-length" se incrementa en un valor de 1, y puedo ver el valor actualizado.

Historia de usuario #14: Cuando hago clic en el elemento con el id de session-decrement, el valor dentro de id="session-length" decrementa por un valor de 1, y puedo ver el valor actualizado.

Historia de usuario #15: Cuando hago clic en el elemento con el id de session-increment, el valor dentro de id="session-length" se incrementa en un valor de 1, y puedo ver el valor actualizado.

Historia de usuario #16: No debe poder establecer una duración de sesión o pausa a <= 0.

Historia de usuario #17: No debe poder establecer una duración de sesión o pausa de > 60.

Historia de usuario #18: Cuando hago clic por primera vez en el elemento con id="start_stop", el temporizador debe empezar a correr desde el valor actualmente mostrado en id="session-length", incluso si el valor ha sido incrementado o decrementado desde el valor original de 25.

Historia de usuario #19: Si el temporizador está en marcha, el elemento con el id time-left debe mostrar el tiempo restante en formato mm:ss (decrementando en un valor de 1 y actualizando la pantalla cada 1000ms).

Historia de usuario #20: Si el temporizador está en marcha y hago clic en el elemento con id="start_stop", la cuenta atrás debería pausarse.

Historia de usuario #21: Si el temporizador está pausado y hago clic en el elemento id="start_stop", la cuenta atrás debe reanudarse desde el punto en el que fue pausada.

Historia de usuario #22: Cuando la cuenta atrás de la sesión llega a cero (NOTA: el temporizador DEBE llegar a 00:00) y una nueva cuenta atrás comienza, el elemento cuyo id es timer-label debe mostrar una cadena en la que se indica que el descanso (break) ha comenzado.

Historia de usuario #23: cuando la cuenta regresiva de una sesión llega a cero (NOTA: el temporizador DEBE llegar a las 00:00), debe comenzar una nueva cuenta regresiva de pausa, contando hacia atrás desde el valor que se muestra actualmente en el elemento id="break-length".

Historia de usuario #24: Cuando la cuenta regresiva en el periodo de descanso (break) llega a cero (NOTA: el temporizador DEBE llegar a 00:00) y una nueva cuenta atrás debe comenzar, el elemento cuyo id es timer-label debe mostrar una cadena indicando que la sesión ha comenzado.

Historia de Usuario #25: Cuando la cuenta regresiva llegue a cero (NOTA: el temporizador DEBE llegar a 00:00), debe comenzar una nueva sesión de conteo regresivo, el cual debe hacerse desde el valor desplegado actualmente en el elemento id="session-length".

User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

User Story #27: The audio element with id="beep" must be 1 second or longer.
