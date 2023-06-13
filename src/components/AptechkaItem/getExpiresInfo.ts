const ONE_WEEK = 7 * 86_400_000;

export const getExpiresInfo = (timestamp: number) => {
  const currentTs = Date.now();
  const timeLeft = timestamp - currentTs;

  if (timeLeft < 0) {
    return {
      timeLeft,
      message: 'Просрочено',
      color: 'red',
    };
  }

  if (timeLeft < ONE_WEEK) {
    return {
      timeLeft,
      message: 'Истекает на этой неделе',
      color: '#ffa657', 
    };
  }

  return {
    timeLeft,
    message: `Годен до ${new Date(timestamp).toLocaleDateString()}`,
    color: 'green',
  };
};
