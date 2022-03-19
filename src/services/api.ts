export interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export const getActivity = async (
  type: string,
  participants: string
): Promise<Activity> => {
  const response = await fetch(
    `http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`
  );
  const resp = await response.json();
  return resp;
};
