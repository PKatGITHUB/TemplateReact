#!/bin/bash
if [ ! -z ${REACT_APP_ENDPOINT} ]; then
 cat <<END
 window.REACT_APP_ENDPOINT="${REACT_APP_ENDPOINT}";
END
fi
if [ ! -z ${REACT_APP_API_HOST} ]; then
 cat <<END
 window.REACT_APP_API_HOST="${REACT_APP_API_HOST}";
END
fi
if [ ! -z ${REACT_APP_INS_KEY} ]; then
 cat <<END
 window.REACT_APP_INS_KEY="${REACT_APP_INS_KEY}";
END
fi
if [ ! -z ${REACT_APP_TELEGRAM_BOT_URL} ]; then
 cat <<END
 window.REACT_APP_TELEGRAM_BOT_URL="${REACT_APP_TELEGRAM_BOT_URL}";
END
fi
if [ ! -z ${REACT_APP_INSTANCE_NAME} ]; then
 cat <<END
 window.REACT_APP_INSTANCE_NAME="${REACT_APP_INSTANCE_NAME}";
END
fi