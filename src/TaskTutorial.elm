module TaskTutorial
    ( print
    , getCurrentTime
    ) where
{-| This module provides some of the most basic tasks to serve as building
blocks for [this tutorial](http://elm-lang.org/learn/Tasks.elm).

@docs print, getCurrentTime

-}

import Native.TaskTutorial
import Task exposing (Task)
import Time exposing (Time)

{-| Take in any Elm value and produce a task. This task will display the value
in your browser's developer console.
-}
print : a -> Task x ()
print value =
  Native.TaskTutorial.log (toString value)


{-| This task results in the current time. Whenever the task is performed, it
will look at the current time and give it to you.
-}
getCurrentTime : Task x Time
getCurrentTime =
  Native.TaskTutorial.getCurrentTime
