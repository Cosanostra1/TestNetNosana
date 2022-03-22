from math import ceil


def chunk(arr, size):
    return list(
        map(lambda x: arr[x * size:x * size + size],
            list(range(0, ceil(len(arr) / size)))))
            def count_by(arr, fn=lambda x: x):
            
    key = {}
    for el in map(fn, arr):
        key[el] = 0 if el not in key else key[el]
        key[el] += 1
    return key
    
    def insertion_sort(arr):

    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
            arr[j + 1] = key
            
            from functools import reduce


def spread(arg):
    ret = []
    for i in arg:
        if isinstance(i, list):
            ret.extend(i)
        else:
            ret.append(i)
    return ret


def gcd(*args):
    numbers = []
    numbers.extend(spread(list(args)))

    def _gcd(x, y):
        return x if not y else gcd(y, x % y)

    return reduce((lambda x, y: _gcd(x, y)), numbers)
