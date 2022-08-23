export const filterUserFriends = (filter, friendsList) => {
    return filter
        ? friendsList.filter(friend => {
              const fullName = `${friend.name} ${friend.lastName}`;
              return (
                  fullName.toLowerCase().includes(filter) ||
                  fullName.includes(filter)
              );
          })
        : friendsList;
};
