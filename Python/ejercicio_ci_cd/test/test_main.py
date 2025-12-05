from src.main import elevar


def test_elevar():
    assert elevar(2, 3) == 8
    assert elevar(3, 2) == 9
    assert elevar(2, 4) == 16
