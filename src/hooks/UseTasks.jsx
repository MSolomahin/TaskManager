import { useMemo } from "react";
import {useSelector} from "react-redux";

export const SortTasks = (tasks, sort) => {

  const sortedTasks = useMemo(() => {
    if (sort) {
      return [...tasks].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return tasks;
  }, [tasks, sort]);

  return sortedTasks;
  
};

export const useTasks = (sort, find) => {
  const tasks = useSelector(state => state.tasks.tasks)
  const sortedTasks = SortTasks(tasks, sort);
  const SearchAndFilterTasks = useMemo(() => {
    return sortedTasks.filter((task) =>
      (task.title.toLowerCase().includes(find.toLowerCase()))
    );
  }, [find, sortedTasks]);
  return SearchAndFilterTasks;
};
