import color from 'color';

import { getTheme } from '../../../core/theming';
import {
  getAndroidSelectionControlColor,
  getSelectionControlIOSColor,
} from '../../Checkbox/utils';

describe('getAndroidSelectionControlColor - ripple color', () => {
  it('should return correct disabled color', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        disabled: true,
        checked: false,
      })
    ).toMatchObject({
      rippleColor: color(getTheme().colors.onSurface)
        .alpha(0.16)
        .rgb()
        .string(),
    });
  });

  it('should return custom color', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        customColor: 'purple',
        checked: false,
      })
    ).toMatchObject({
      rippleColor: color('purple').fade(0.32).rgb().string(),
    });
  });

  it('should return theme color', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        checked: false,
      })
    ).toMatchObject({
      rippleColor: color(getTheme().colors.primary).fade(0.32).rgb().string(),
    });
  });
});

describe('getAndroidSelectionControlColor - checkbox color', () => {
  it('should return correct disabled color', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        disabled: true,
        checked: false,
      })
    ).toMatchObject({
      selectionControlColor: getTheme().colors.onSurfaceDisabled,
    });
  });

  it('should return custom color, checked', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        checked: true,
        customColor: 'purple',
      })
    ).toMatchObject({
      selectionControlColor: 'purple',
    });
  });

  it('should return theme color, checked', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        checked: true,
      })
    ).toMatchObject({
      selectionControlColor: getTheme().colors.primary,
    });
  });

  it('should return custom color, unchecked', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        checked: false,
        customUncheckedColor: 'purple',
      })
    ).toMatchObject({
      selectionControlColor: 'purple',
    });
  });

  it('should return theme color, unchecked', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(),
        checked: false,
      })
    ).toMatchObject({
      selectionControlColor: getTheme().colors.onSurfaceVariant,
    });
  });

  it('should return theme color, unchecked, dark mode', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(true),
        checked: false,
      })
    ).toMatchObject({
      selectionControlColor: getTheme(true).colors.onSurfaceVariant,
    });
  });

  it('should return theme color, unchecked, light mode', () => {
    expect(
      getAndroidSelectionControlColor({
        theme: getTheme(false),
        checked: false,
      })
    ).toMatchObject({
      selectionControlColor: getTheme(false).colors.onSurfaceVariant,
    });
  });
});

describe('getSelectionControlIOSColor - ripple color', () => {
  it('should return correct disabled color', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
        disabled: true,
      })
    ).toMatchObject({
      rippleColor: color(getTheme().colors.onSurface)
        .alpha(0.16)
        .rgb()
        .string(),
    });
  });

  it('should return custom color', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
        customColor: 'purple',
      })
    ).toMatchObject({
      rippleColor: color('purple').fade(0.32).rgb().string(),
    });
  });

  it('should return theme color', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
      })
    ).toMatchObject({
      rippleColor: color(getTheme().colors.primary).fade(0.32).rgb().string(),
    });
  });
});

describe('getSelectionControlIOSColor - checked color', () => {
  it('should return correct disabled color', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
        disabled: true,
      })
    ).toMatchObject({
      checkedColor: getTheme().colors.onSurfaceDisabled,
    });
  });

  it('should return custom color, checked', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
        customColor: 'purple',
      })
    ).toMatchObject({
      checkedColor: 'purple',
    });
  });

  it('should return theme color, checked', () => {
    expect(
      getSelectionControlIOSColor({
        theme: getTheme(),
      })
    ).toMatchObject({
      checkedColor: getTheme().colors.primary,
    });
  });
});
